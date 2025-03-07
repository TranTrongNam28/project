/*
  # Initial Schema Setup

  1. New Tables
    - `menu_items`: Stores all menu items
      - `id` (uuid, primary key)
      - `name` (text)
      - `description` (text)
      - `price` (integer)
      - `image_url` (text)
      - `category` (text)
      - `available` (boolean)
      - `created_at` (timestamp)

    - `orders`: Stores customer orders
      - `id` (uuid, primary key)
      - `customer_name` (text)
      - `customer_phone` (text)
      - `customer_email` (text)
      - `order_date` (date)
      - `order_time` (time)
      - `note` (text)
      - `status` (text)
      - `total_amount` (integer)
      - `created_at` (timestamp)

    - `order_items`: Stores items within each order
      - `id` (uuid, primary key)
      - `order_id` (uuid, foreign key)
      - `menu_item_id` (uuid, foreign key)
      - `quantity` (integer)
      - `price` (integer)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create menu_items table
CREATE TABLE menu_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  price integer NOT NULL,
  image_url text,
  category text NOT NULL,
  available boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Create orders table
CREATE TABLE orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  customer_phone text NOT NULL,
  customer_email text NOT NULL,
  order_date date NOT NULL,
  order_time time NOT NULL,
  note text,
  status text NOT NULL DEFAULT 'pending',
  total_amount integer NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create order_items table
CREATE TABLE order_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid REFERENCES orders(id) ON DELETE CASCADE,
  menu_item_id uuid REFERENCES menu_items(id) ON DELETE RESTRICT,
  quantity integer NOT NULL,
  price integer NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Menu items are viewable by everyone"
  ON menu_items
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Orders are viewable by authenticated users only"
  ON orders
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Order items are viewable by authenticated users only"
  ON order_items
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Orders can be created by anyone"
  ON orders
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Order items can be created by anyone"
  ON order_items
  FOR INSERT
  TO public
  WITH CHECK (true);
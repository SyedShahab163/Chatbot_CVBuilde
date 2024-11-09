// pages/api/signup.js

export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { email, username, password } = req.body;
  
      // Mock database save or actual database logic here
      // e.g., Save to MongoDB, PostgreSQL, etc.
  
      if (email && username && password) {
        // Simulate successful save
        res.status(200).json({ message: 'User created successfully!' });
      } else {
        res.status(400).json({ message: 'Invalid input.' });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  
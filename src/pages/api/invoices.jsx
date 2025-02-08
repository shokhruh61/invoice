export default function handler (req, res) {
  if (req.method === 'GET') {
    res.status(200).json([
      { id: 1, client: 'John Doe', amount: 500, status: 'Paid' },
      { id: 2, client: 'Jane Smith', amount: 300, status: 'Pending' }
    ])
  } else if (req.method === 'POST') {
    const { client, amount, status } = req.body
    res.status(201).json({ id: Date.now(), client, amount, status })
  }
}

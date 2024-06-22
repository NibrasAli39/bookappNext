import { NextApiRequest, NextApiResponse } from "next";
import { books } from "../../../data/books";

/**
 * @swagger
 * /api/books/{id}:
 *   get:
 *     summary: Retrieve a single book
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single book
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       404:
 *         description: Book not found
 *   put:
 *     summary: Update a book
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BookInput'
 *     responses:
 *       200:
 *         description: Updated book
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       404:
 *         description: Book not found
 *   delete:
 *     summary: Delete a book
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Book deleted successfully
 *       404:
 *         description: Book not found
 */

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const book = books.findIndex((book) => book.id === id);
  if (book === -1) {
    return res.status(404).json({ error: "Book not found" });
  }
  if (req.method === "GET") {
    return res.status(200).json(books[book]);
  } else if (req.method === "PUT") {
    const { title, author, publishedDate, summary } = req.body;

    if (!title || !author || !publishedDate || !summary) {
      res.status(400).json({ error: "Missing required fields" });
    }

    const newBook = { ...books[book], title, author, publishedDate, summary };
    books[book] = newBook;
    return res.status(200).json(newBook);
  } else if (req.method === "DELETE") {
    books.splice(book, 1);
    return res.status(204).json(books);
  } else {
    res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

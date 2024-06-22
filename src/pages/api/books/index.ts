import { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";
import { books, Book } from "../../../data/books";

/**
 * @swagger
 * /api/books:
 *   get:
 *     summary: Retrieve all books
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: List of all books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 *   post:
 *     summary: Create a new book
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BookInput'
 *     responses:
 *       201:
 *         description: Created book
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       400:
 *         description: Missing required fields
 *
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         title:
 *           type: string
 *         author:
 *           type: string
 *         publishedDate:
 *           type: string
 *           format: date
 *         summary:
 *           type: string
 *     BookInput:
 *       type: object
 *       required:
 *         - title
 *         - author
 *         - publishedDate
 *         - summary
 *       properties:
 *         title:
 *           type: string
 *         author:
 *           type: string
 *         publishedDate:
 *           type: string
 *           format: date
 *         summary:
 *           type: string
 */

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "GET") {
    return res.status(200).json(books);
  } else if (req.method == "POST") {
    const { title, author, publishedDate, summary } = req.body;
    if (!title || !author || !publishedDate || !summary) {
      return res.status(400).json({ error: "Required fields missing" });
    }
    const book: Book = {
      id: uuidv4(),
      title,
      author,
      publishedDate,
      summary,
    };
    books.push(book);
    return res.status(201).json(book);
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method: ${req.method} isn't allowed`);
  }
}

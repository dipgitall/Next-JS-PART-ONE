import type { NextApiRequest, NextApiResponse } from 'next';

import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ status: 'Failed' });
  }

  try {
    //const user: Prisma.UserCreateInput = JSON.parse(req.body);

    const { PatientName,PNumber,email,AboutSymptoms,appdate,Acategory,gender,appTtime } = req.body;
    const savedUser = await prisma.user.create({ data: {PatientName,PNumber,email,appdate,gender,Acategory,AboutSymptoms,appTtime} });
    res.status(200).json({ status: 'success' });
  } catch (err) {
    res.status(400).json({ status: 'Failed' });
  }
};

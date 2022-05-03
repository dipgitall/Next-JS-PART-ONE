import { NextApiRequest, NextApiResponse } from "next";

import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req,res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ status: 'Method not allowed' });
  }


  try
  {
    const PatientName=req.body.PatientName;
    const PNumber=req.body.PNumber;
    const email=req.body.email;
    const appdate=req.body.appdate;
    const gender=req.body.gender;
    const Acategory=req.body.Acategory;
    const AboutSymptoms=req.body.AboutSymptoms;
    const appTtime=req.body.appTtime;

  
    await prisma.appointment_app.create({ data: {pname:PatientName,
      phone_no:PNumber,
      email:email,
      app_date:appdate,
      gender:gender,
      department:Acategory,
      symptoms:AboutSymptoms,
      app_time:appTtime} });

    res.status(200).json({ status: "success" });


  } catch (err) {
    res.status(400).json({ status: "Failrd" });
  }
};

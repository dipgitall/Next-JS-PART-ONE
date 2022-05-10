import { NextApiRequest, NextApiResponse } from "next";

import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req,res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ status: 'Method not allowed' });
  }

    
  function validateEmail (emailAdress)
  {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailAdress.match(regexEmail)) {
      return true; 
    } else {
      return false; 
    }
  }

  function validatePhone (phone)
  {
    let regexP = /^\+(?:[0-9] ?){6,14}[0-9]$/;
    if (phone.match(regexP)) {
      return true; 
    } else {
      return false; 
    }
  }


    const PatientName=req.body.PatientName;
    const PNumber=req.body.PNumber;
    const email=req.body.email;
    const appdate=req.body.appdate;
    const gender=req.body.gender;
    const Acategory=req.body.Acategory;
    const AboutSymptoms=req.body.AboutSymptoms;
    const appTtime=req.body.appTtime;

    let errp=0;

   if(PatientName=="")
   {
     
     errp=1;
   }

   if(PNumber=="")
   {
    
     errp=1;
   }

   if(!validatePhone (PNumber))
   {
     
     errp=1;
   }


   

   if(email=="")
   {
     
     errp=1;
   }

   if(!validateEmail(email))
   {
     
     errp=1;  
   }

   if(Acategory=="")
   {
     
     errp=1;
   }

   if(gender=="")
   {
     
     errp=1;
   }

   if(errp==0)
   {
      try
      {

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
        res.status(400).json({ status: "Failed" });
      }

  }else{
    res.status(400).json({ status: "Failed" });
  }

};

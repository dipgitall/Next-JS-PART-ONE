import React ,{useState} from 'react';


export default function Appointment() {
  const [PatientName,setPatientName]=useState("");
  const [PNumber,setPNumber]=useState("");
  const [email,setemail]=useState("");
  const [AboutSymptoms,setAboutSymptoms]=useState("");
  const [appdate,setappdate]=useState("");
  const [Acategory,setAcategory]=useState("");
  const [gender,setgender]=useState("");
  const [appTtime,setappTtime]=useState("");

async function make_appointment(e)
 {
   e.preventDefault();

   let errp=0;

   if(PatientName=="")
   {
     $("#errname").html("Required")
     errp=1;
   }

   if(PNumber=="")
   {
     $("#errphone").html("Required")
     errp=1;
   }

   if(email=="")
   {
     $("#erremail").html("Required")
     errp=1;
   }

   if(Acategory=="")
   {
     $("#errcat").html("Required")
     errp=1;
   }

   if(gender=="")
   {
     $("#errgen").html("Required")
     errp=1;
   }

   if(errp==0)
   {
     let item={PatientName,PNumber,email,appdate,gender,Acategory,AboutSymptoms,appTtime};

     fetch('/api/application', {
      method : 'POST',
      headers :{ 'Content-Type' : 'application/json'},
      body : JSON.stringify(item)
      }).then(response => response.json())
        .then(data => {
          if(data.status === 'success')
          {
            //alert(data.status);
            $("#succ").html("Your appointment has been booked");
            $('#afblank').trigger("reset");
            $(".eps").html("*");
          }else{
            $("#errs").html("!Sorry Try Again");
          }
      })

   }



 }
  return (
  <div>
	<div className="banner1 jarallax">
		<div className="container">
		</div>
	</div>

	<div className="services-breadcrumb">
		<div className="container">
			<ul>
				<li><a href="index.html">Home</a><i>|</i></li>
				<li>Appointment</li>
			</ul>
		</div>
	</div>

	<div className="banner-bottom" id="about">
		<div className="container">
					<h2 className="w3_heade_tittle_agile">Appointment</h2>
			        <p className="sub_t_agileits">Add Short Description</p>

					<div className="book-appointment">
						<h4>Make an appointment </h4>
            <h4><span id="succ" style={{color:"green"}}></span><span id="errs" style={{color:"red"}}></span></h4>
								<form id="afblank">
								<div className="left-agileits-w3layouts same">
								<div className="gaps">
									<p>Patient Name <span class="eps" id="errname" style={{color:"red"}}>*</span></p>
										<input type="text" name="PatientName" onChange={(e)=>setPatientName(e.target.value)} id="PatientName" placeholder="" required=""/>
								</div>
									<div className="gaps">
									<p>Phone Number <span class="eps" id="errphone" style={{color:"red"}}>*</span></p>
										<input type="text" name="PNumber" onChange={(e)=>setPNumber(e.target.value)} id="PNumber" placeholder="" required=""/>
									</div>
									<div className="gaps">
									<p>Email <span class="eps" id="erremail" style={{color:"red"}}>*</span></p>
											<input type="email" name="email" id="email" onChange={(e)=>setemail(e.target.value)} placeholder="" required="" />
									</div>
									<div className="gaps">
									<p>Symptoms</p>
											<textarea name="AboutSymptoms" id="AboutSymptoms" onChange={(e)=>setAboutSymptoms(e.target.value)} placeholder="" required="" ></textarea>
									</div>
								</div>
								<div className="right-agileinfo same">
								<div className="gaps">
									<p>Select Date</p>
											<input type="date" id="appdate" name="appdate"   onChange={(e)=>setappdate(e.target.value)}  required=""/>
								</div>
								<div className="gaps">
									<p>Department <span class="eps" id="errcat" style={{color:"red"}}>*</span></p>
										<select className="option" name="Acategory" id="Acategory" onChange={(e)=>setAcategory(e.target.value)}>
											<option>Select Department</option>
											<option value="Cardiology">Cardiology</option>
											<option value="Ophthalmology">Ophthalmology</option>
											<option value="Neurology">Neurology</option>
											<option value="Psychology">Psychology</option>
											<option value="Dermatology">Dermatology</option>
										</select>
								</div>
								<div className="gaps">
									<p>Gender <span class="eps" id="errgen" style={{color:"red"}}>*</span></p>
										<select className="option" name="gender" id="gender" onChange={(e)=>setgender(e.target.value)}>
											<option> Select Gender </option>
											<option value="M">Male</option>
                      <option value="F">Female</option>
											<option value="O">Others</option>
										</select>
								</div>
								<div className="gaps">
									<p>Time</p>
										<input type="time" id="appTtime" name="appTtime" onChange={(e)=>setappTtime(e.target.value)}/>
								</div>
								</div>
								<div className="clearfix"></div>
											  <button  className="btn btn-primary btng" onClick={make_appointment}> Make an Appointment </button>
								</form>
							</div>
					   </div>

		</div>
	</div>

);

}

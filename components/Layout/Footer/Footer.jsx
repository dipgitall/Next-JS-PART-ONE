import React from 'react';

export default function Footer(){
return(

    <div className="footer">
      <div className="container">
        <h4>Subscribe to <span>Newsletter</span></h4>
        <form action="#" method="post">
          <input type="email" name="Email" placeholder="Enter Your Email..." required=""/>
          <input type="submit" value="Send"/>
        </form>
        <div className="agile_footer_copy">
          <div className="w3agile_footer_grids">
            <div className="col-md-4 w3agile_footer_grid">
              <h3>About Us</h3>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse.<span>Excepteur sint occaecat cupidatat
                non proident, sunt in culpa qui officia deserunt mollit.</span></p>
            </div>
            <div className="col-md-4 w3agile_footer_grid">
              <h3>Contact Info</h3>
              <ul>
                <li><i className="fa fa-map-marker" aria-hidden="true"></i>1234k Avenue, 4th block, <span>New York City.</span></li>
                <li><i className="fa fa-envelope-o" aria-hidden="true"></i><a href="mailto:info@example.com">info@example.com</a></li>
                <li><i className="fa fa-phone" aria-hidden="true"></i>+1234 567 567</li>
              </ul>
            </div>
            <div className="col-md-4 w3agile_footer_grid w3agile_footer_grid1">
              <h3>Navigation</h3>
              <ul>
                <li><span className="fa fa-long-arrow-right" aria-hidden="true"></span><a href="gallery.html">Department</a></li>
                <li><span className="fa fa-long-arrow-right" aria-hidden="true"></span><a href="appointment.html">Appointment</a></li>
                <li><span className="fa fa-long-arrow-right" aria-hidden="true"></span><a href="about.html">About</a></li>
                <li><span className="fa fa-long-arrow-right" aria-hidden="true"></span><a href="contact.html">Contact Us</a></li>
              </ul>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
        <div className="w3_agileits_copy_right_social">
          <div className="col-md-6 agileits_w3layouts_copy_right">
            <p>&copy; 2022 Health Plus. All rights reserved | Developed by Dipankar Biswas <a href="http://w3layouts.com/"></a></p>
          </div>
          <div className="col-md-6 w3_agile_copy_right">
            <ul className="agileits_social_list">
                  <li><a href="#" className="w3_agile_facebook"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                  <li><a href="#" className="agile_twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                  <li><a href="#" className="w3_agile_dribble"><i className="fa fa-dribbble" aria-hidden="true"></i></a></li>
                  <li><a href="#" className="w3_agile_rss"><i className="fa fa-rss" aria-hidden="true"></i></a></li>
                </ul>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>

      <div className="modal video-modal fade" id="myModal" role="dialog" aria-labelledby="myModal">
    		<div className="modal-dialog" role="document">
    			<div className="modal-content">
    				<div className="modal-header">
    					Health Plus
    					<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
    				</div>
    				<section>
    					<div className="modal-body">
    						<img src="images/g9.jpg" alt=" " className="img-responsive" />
    						<p>Ut enim ad minima veniam, quis nostrum
    							exercitationem ullam corporis suscipit laboriosam,
    							nisi ut aliquid ex ea commodi consequatur? Quis autem
    							vel eum iure reprehenderit qui in ea voluptate velit
    							esse quam nihil molestiae consequatur, vel illum qui
    							dolorem eum fugiat quo voluptas nulla pariatur.
    							<i>" Quis autem vel eum iure reprehenderit qui in ea voluptate velit
    								esse quam nihil molestiae consequatur.</i></p>
    					</div>
    				</section>
    			</div>
    		</div>
    	</div>
    </div>




);

}

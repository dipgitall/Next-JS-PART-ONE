import React from 'react';
import Link from 'next/link'

export default function Header(){
return(

      <div className="main" id="home">
      <div className="header_agileinfo">
              <div className="w3_agileits_header_text">
                  <ul className="top_agile_w3l_info_icons">
                    <li><i className="fa fa-home" aria-hidden="true"></i>12K Street,New York City.</li>
                    <li className="second"><i className="fa fa-phone" aria-hidden="true"></i>(+000) 123 456 87</li>

                    <li><i className="fa fa-envelope-o" aria-hidden="true"></i><a href="mailto:maria@example.com">info@example.com</a></li>
                  </ul>

              </div>
              <div className="agileinfo_social_icons">
                <ul className="agileits_social_list">
                  <li><a href="#" className="w3_agile_facebook"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                  <li><a href="#" className="agile_twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                  <li><a href="#" className="w3_agile_dribble"><i className="fa fa-dribbble" aria-hidden="true"></i></a></li>
                  <li><a href="#" className="w3_agile_rss"><i className="fa fa-rss" aria-hidden="true"></i></a></li>
                </ul>
              </div>
              <div className="clearfix"> </div>
        </div>

      <div className="header-bottom">
        <nav className="navbar navbar-default">

          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            </button>
            <div className="logo">
              <h1><a className="navbar-brand" href="index.html"><span>N</span>oPain <i className="fa fa-plus" aria-hidden="true"></i> <p>India</p></a></h1>
            </div>
          </div>


          <div className="collapse navbar-collapse nav-wil" id="bs-example-navbar-collapse-1">
            <nav className="menu menu--sebastian">
            <ul id="m_nav_list" className="m_nav menu__list">
              <li className="m_nav_item menu__item menu__item--current" id="m_nav_item_1"> <Link href="/" className="menu__link"><a> Home </a></Link></li>
              <li className="m_nav_item menu__item" id="moble_nav_item_2"> <Link href="/about" className="menu__link"><a> About Us </a></Link> </li>
              <li className="m_nav_item menu__item" id="moble_nav_item_4"> <Link href="/appointment" className="menu__link"><a>Appointment  </a></Link> </li>

              <li className="m_nav_item menu__item" id="moble_nav_item_5"> <Link href="/gallery" className="menu__link"><a>Departments</a></Link> </li>
              <li className="m_nav_item menu__item" id="moble_nav_item_6"> <Link href="/contact" className="menu__link"><a> Contact </a></Link> </li>
            </ul>
          </nav>

          </div>

        </nav>
      </div>
      </div>


);

}

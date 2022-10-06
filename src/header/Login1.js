import React,{useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import'./Login1.css'
const Login1 = () => {
  const [emailid ,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const navigate=useNavigate();
  const handleLogin = async (e) =>{
    e.preventDefault();

    
    let r = await axios.post("http://localhost:7399/api/logins/Registration",{emailid:emailid,password:password})
    console.log(r)

navigate('/landingscreen')
    
    }
 
   
    // if(emailid){
    //   localStorage.setItem('user',JSON.stringify(emailid));
    // }else{
    //   alert('please enter correct details')
    // }
  
  return (
    <div>
    



            <div>
            <header className="public-header">
              <div className="ant-row-flex ant-row-flex-space-between">
                <div className="ant-col">
                  <div className="ant-row-flex">
                    <div className="ant-col">
                      <a href="https://www.learntowin.com" className="logo">
                        <img
                          src="https://app.learntowin.us/static/media/logo.2b59dfc4.svg"
                          alt="Logo"
                        />
                      </a>
                    </div>
                    <div className="ant-col desktop-main-menu-wrapper">
                      <ul
                        className="ant-menu main-menu ant-menu-light ant-menu-root ant-menu-horizontal"
                        role="menu"
                      >
                        <li
                          className="ant-menu-submenu ant-menu-submenu-horizontal ant-menu-overflowed-submenu"
                          role="menuitem"
                          style={{ display: "none" }}
                        >
                          <div
                            className="ant-menu-submenu-title"
                            aria-expanded="false"
                            aria-haspopup="true"
                          >
                            <span>···</span>
                            <i className="ant-menu-submenu-arrow" />
                          </div>
                        </li>
                        <li className="ant-menu-item item" role="menuitem">
                          <a href="https://www.learntowin.com/partners" target="_self">
                            <span className="paragraph-4 paragraph--break-word paragraph--color--inherit text-wrapper">
                              Partners
                            </span>
                          </a>
                        </li>
                        <li
                          className="ant-menu-submenu ant-menu-submenu-horizontal ant-menu-overflowed-submenu"
                          role="menuitem"
                          style={{ display: "none" }}
                        >
                          <div
                            className="ant-menu-submenu-title"
                            aria-expanded="false"
                            aria-haspopup="true"
                          >
                            <span>···</span>
                            <i className="ant-menu-submenu-arrow" />
                          </div>
                        </li>
                        <li className="ant-menu-item item" role="menuitem">
                          <a href="https://www.learntowin.com/company" target="_self">
                            <span className="paragraph-4 paragraph--break-word paragraph--color--inherit text-wrapper">
                              Company
                            </span>
                          </a>
                        </li>
                        <li
                          className="ant-menu-submenu ant-menu-submenu-horizontal ant-menu-overflowed-submenu"
                          role="menuitem"
                          style={{ display: "none" }}
                        >
                          <div
                            className="ant-menu-submenu-title"
                            aria-expanded="false"
                            aria-haspopup="true"
                          >
                            <span>···</span>
                            <i className="ant-menu-submenu-arrow" />
                          </div>
                        </li>
                        <li className="ant-menu-item item" role="menuitem">
                          <a href="https://www.learntowin.com/in-the-news" target="_self">
                            <span className="paragraph-4 paragraph--break-word paragraph--color--inherit text-wrapper">
                              In the News
                            </span>
                          </a>
                        </li>
                        <li
                          className="ant-menu-submenu ant-menu-submenu-horizontal ant-menu-overflowed-submenu"
                          role="menuitem"
                          style={{
                            visibility: "hidden",
                            position: "absolute",
                            display: "none"
                          }}
                        >
                          <div
                            className="ant-menu-submenu-title"
                            aria-expanded="false"
                            aria-haspopup="true"
                          >
                            <span>···</span>
                            <i className="ant-menu-submenu-arrow" />
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="ant-col">
                  <div className="ant-row-flex ant-row-flex-middle">
                    <div className="ant-col">
                      <a
                        className="MuiButtonBase-root MuiButton-root jss1 MuiButton-text learn-more"
                        tabIndex={0}
                        aria-disabled="false"
                        href="https://www.learntowin.com/demo"
                      >
                        <span className="MuiButton-label jss2">Learn More</span>
                        <span className="MuiTouchRipple-root" />
                      </a>
                    </div>
                    <div className="ant-col">
                      <a
                        className="secondary-menu-tabs"
                        href="https://www.learntowin.com/service/support/"
                      >
                        <span className="paragraph-5 paragraph--break-word paragraph--color--inherit">
                          CONTACT SUPPORT
                        </span>
                      </a>
                      <a
                        aria-current="page"
                        className="secondary-menu-tabs active"
                        href="/sign-in"
                      >
                        <span className="paragraph-5 paragraph--break-word paragraph--color--inherit">
                          LOG IN
                          <i
                            aria-label="icon: double-right"
                            className="anticon anticon-double-right"
                          >
                            <svg
                              viewBox="64 64 896 896"
                              focusable="false"
                              className=""
                              data-icon="double-right"
                              width="1em"
                              height="1em"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 0 0 188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 0 0 492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z" />
                            </svg>
                          </i>
                        </span>
                      </a>
                    </div>
                    <div className="ant-col">
                      <i
                        aria-label="icon: menu"
                        tabIndex={-1}
                        className="anticon anticon-menu mobile-menu-burger"
                      >
                        <svg
                          viewBox="64 64 896 896"
                          focusable="false"
                          className=""
                          data-icon="menu"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z" />
                        </svg>
                      </i>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            <div className="login-page-wrapper">
              <div
                className="ScrollbarsCustom"
                style={{ height: "100vh", width: "100vw" }}
              >
                <div className="ScrollbarsCustom-Wrapper">
                  <div className="ScrollbarsCustom-Scroller">
                    <div className="ScrollbarsCustom-Content">
                      <div className="ant-row-flex ant-row-flex-center login-form-wrapper">
                        <div className="ant-col login-form-col ant-col-xs-24 ant-col-md-20 ant-col-lg-18 ant-col-xl-12 ant-col-xxl-11">
                          <div
                            data-testid="landing-card"
                            className="ant-col landing-card"
                          >
                            <div className="ant-row card-boundary">
                              <div className="ant-col">
                                <div
                                  className="ant-col pane-sign-in-img"
                                  style={{
                                    backgroundImage: 'url("https://app.learntowin.us/static/media/loginPane.fd69c521.png")'
                                }}
                                >
                                  <div className="ant-row pane-sign-in-text-block">
                                    <div className="ant-col">
                                      <h2 className="pane-sign-in-welcome">
                                        Welcome Back!
                                      </h2>
                                      <p className="pane-sign-in-type">
                                        Log in as an admin or a user
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="ant-spin-nested-loading l2w-spinner">
                                  <div className="ant-spin-container">
                                    <div className="ant-row-flex ant-row-flex-center">
                                      <div className="ant-col login-form-body ant-col-xs-22">
                                        <div className="ant-row-flex ant-row-flex-center">
                                          <div className="ant-col ant-col-xxl-18">
                                            <div
                                              role="group"
                                              className="MuiButtonGroup-root btn-group"
                                            >
                                              <button
                                                className="MuiButtonBase-root-30 MuiButton-root-3 MuiButton-contained-11 MuiButtonGroup-grouped MuiButtonGroup-groupedHorizontal MuiButtonGroup-groupedOutlined MuiButtonGroup-groupedOutlinedHorizontal MuiButtonGroup-groupedOutlinedPrimary active MuiButton-containedPrimary-12 MuiButton-containedSizeLarge-21 MuiButton-sizeLarge-23"
                                                tabIndex={0}
                                                type="button"
                                              >
                                                <span className="MuiButton-label-4">
                                                  Admin
                                                </span>
                                                <span className="MuiTouchRipple-root-66" />
                                              </button>
                                              <a
                                                className="MuiButtonBase-root-58 MuiButton-root-31 MuiButton-contained-39 MuiButtonGroup-grouped MuiButtonGroup-groupedHorizontal MuiButtonGroup-groupedOutlined MuiButtonGroup-groupedOutlinedHorizontal MuiButtonGroup-groupedOutlinedPrimary MuiButton-containedPrimary-40 MuiButton-containedSizeLarge-49 MuiButton-sizeLarge-51"
                                                tabIndex={0}
                                                aria-disabled="false"
                                                href="https://user.learntowin.us"
                                              >
                                                <span className="MuiButton-label-32">
                                                  User
                                                </span>
                                                <span className="MuiTouchRipple-root-76" />
                                              </a>
                                            </div>
                                            <form id="sign-in-form" noValidate="">
                                              <div>
                                                <div className="MuiFormControl-root MuiTextField-root jss59 login-input MuiFormControl-marginNormal MuiFormControl-fullWidth">
                                                
                                                  <div className="MuiInputBase-root MuiOutlinedInput-root jss61 MuiInputBase-fullWidth MuiInputBase-formControl">
                                                    
                                                  <label for="email">Email:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <input type="email" id="email" name="email" onChange={(e)=>setEmail(e.target.value)} value={emailid} style={{width:"80%"}}/>
                                                  
        
                                                   
                                                  </div>
                                                </div>
                                                <div className="MuiFormControl-root MuiTextField-root jss59 login-input MuiFormControl-marginNormal MuiFormControl-fullWidth">
                                                 
                                                  <div className="MuiInputBase-root MuiOutlinedInput-root jss59 MuiInputBase-fullWidth MuiInputBase-formControl">
                                                  <label for="password">Password:</label>
<input type="password" id="password" name="password"  onChange={(e)=>setPassword(e.target.value)} value={password}></input>
                                                  
                                                   
                                                    
                                                  </div>
                                                </div>
                                               
                                                <a
                                                  className="forgot-password"
                                                  href="/forgot-password"
                                                >
                                                  Forgot Password?
                                                </a>
                                                <button
                                                  className="MuiButtonBase-root MuiButton-root MuiButton-outlined login-btn MuiButton-outlinedSecondary MuiButton-outlinedSizeLarge MuiButton-sizeLarge"
                                                  tabIndex={0}
                                                  type="submit"
                                                  style={{width:"200px"}}
                                                  onClick={handleLogin}
                                                >
                                                  <span className="MuiButton-label">
                                                    Log In
                                                  </span>
                                                  <span className="MuiTouchRipple-root" />
                                                </button>
                                                <div
                                                  className="ant-divider ant-divider-horizontal ant-divider-with-text-center"
                                                  role="separator"
                                                >
                                                  <span className="ant-divider-inner-text">
                                                    Or
                                                  </span>
                                                </div>
                                                <div className="sso-login-btn-container">
                                                  <span className="paragraph-6 paragraph--break-word sso-login-text">
                                                    Log in with SSO
                                                  </span>
                                                </div>
                                              </div>
                                            </form>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        
  



    </div>
  )
  
}

export default Login1


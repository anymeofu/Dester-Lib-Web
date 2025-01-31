import React, { useEffect, useState } from 'react';
import colors from "../../theme";
import useCustomTheme from "react-switch-theme";
import { Badge, Button, Container, Dropdown, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import guid from '../../utilities/guid';
import { useAuth0 } from '@auth0/auth0-react';

const NavUI = ({type}) => {

    const themeOptions = {
        colors,
        activeMode: "dark",
        offlineStorageKey: "react-random-key"
    };

    const [theme, setDiffTheme] = useCustomTheme(themeOptions);

    const { user, logout, getAccessTokenSilently } = useAuth0();
    const [userMetadata, setUserAccessToken] = useState(null);
    const domain = process.env.REACT_APP_AUTH0_DOMAIN;

    // useEffect(() => {
    // const getUserMetadata = async () => {
    //     try {
    //         const accessToken = await getAccessTokenSilently({
    //             audience: `https://${domain}/api/v2/`,
    //             scope: "read:current_user",
    //         });
    
    //         setUserAccessToken(accessToken);
    //         } catch (e) {
    //         console.log(e.message);
    //         }
    // };

    // getUserMetadata();
    // }, [getAccessTokenSilently, user?.sub]);

    // if(user) {
    //     console.log(user)
    //     console.log(userMetadata)
    // }

    return (
        <>
            {type === "desktop" && (
                <Navbar className="navbar-desktop desktop-display" expand="lg">
                    <Container>
                        <Navbar.Brand as={Link} to="/">
                        <div className="logo-full d-inline-block align-top">
                            <svg className="logo-full-svg" viewBox="0 0 1244 341" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="logo-start-text" d="M331.36 269C329.248 269 327.52 268.328 326.176 266.984C324.832 265.64 324.16 263.912 324.16 261.8V74.6C324.16 72.488 324.832 70.76 326.176 69.416C327.52 68.072 329.248 67.4 331.36 67.4H465.856C467.968 67.4 469.696 68.072 471.04 69.416C472.384 70.76 473.056 72.488 473.056 74.6V101.672C473.056 103.784 472.384 105.512 471.04 106.856C469.696 108.2 467.968 108.872 465.856 108.872H373.984V147.752H459.52C461.632 147.752 463.36 148.52 464.704 150.056C466.048 151.4 466.72 153.128 466.72 155.24V180.296C466.72 182.216 466.048 183.944 464.704 185.48C463.36 186.824 461.632 187.496 459.52 187.496H373.984V227.528H468.16C470.272 227.528 472 228.2 473.344 229.544C474.688 230.888 475.36 232.616 475.36 234.728V261.8C475.36 263.912 474.688 265.64 473.344 266.984C472 268.328 470.272 269 468.16 269H331.36ZM583.266 271.88C564.066 271.88 548.13 269.192 535.458 263.816C522.786 258.248 513.186 251.048 506.658 242.216C500.13 233.384 496.674 223.976 496.29 213.992C496.29 212.456 496.866 211.112 498.018 209.96C499.362 208.616 500.898 207.944 502.626 207.944H538.914C541.602 207.944 543.618 208.424 544.962 209.384C546.498 210.344 547.842 211.592 548.994 213.128C550.53 216.008 552.642 218.792 555.33 221.48C558.21 224.168 561.858 226.376 566.274 228.104C570.882 229.64 576.546 230.408 583.266 230.408C594.402 230.408 602.754 228.68 608.322 225.224C614.082 221.768 616.962 217.064 616.962 211.112C616.962 206.888 615.426 203.432 612.354 200.744C609.282 197.864 604.29 195.368 597.378 193.256C590.658 190.952 581.634 188.648 570.306 186.344C555.714 183.272 543.234 179.336 532.866 174.536C522.69 169.544 514.914 163.112 509.538 155.24C504.162 147.176 501.474 137.192 501.474 125.288C501.474 113.576 504.738 103.112 511.266 93.896C517.986 84.68 527.298 77.48 539.202 72.296C551.106 67.112 565.218 64.52 581.538 64.52C594.786 64.52 606.402 66.248 616.386 69.704C626.562 73.16 635.106 77.768 642.018 83.528C648.93 89.288 654.114 95.432 657.57 101.96C661.218 108.296 663.138 114.536 663.33 120.68C663.33 122.216 662.754 123.656 661.602 125C660.45 126.152 659.01 126.728 657.281 126.728H619.266C617.154 126.728 615.33 126.344 613.794 125.576C612.258 124.808 610.914 123.56 609.762 121.832C608.61 117.608 605.538 113.96 600.546 110.888C595.746 107.624 589.41 105.992 581.538 105.992C573.09 105.992 566.466 107.528 561.666 110.6C557.058 113.48 554.754 117.992 554.754 124.136C554.754 127.976 556.002 131.336 558.498 134.216C561.186 137.096 565.506 139.592 571.458 141.704C577.602 143.816 585.954 146.024 596.514 148.328C613.986 151.592 628.098 155.72 638.85 160.712C649.602 165.512 657.474 171.848 662.466 179.72C667.458 187.4 669.954 197.096 669.954 208.808C669.954 221.864 666.21 233.192 658.722 242.792C651.426 252.2 641.25 259.4 628.194 264.392C615.138 269.384 600.162 271.88 583.266 271.88Z"/>
                            <path className="logo-end-text" d="M750.712 269C748.6 269 746.872 268.328 745.528 266.984C744.184 265.64 743.512 263.912 743.512 261.8V112.616H692.248C690.136 112.616 688.408 111.944 687.064 110.6C685.72 109.064 685.048 107.336 685.048 105.416V74.6C685.048 72.488 685.72 70.76 687.064 69.416C688.408 68.072 690.136 67.4 692.248 67.4H847.192C849.304 67.4 851.032 68.072 852.376 69.416C853.72 70.76 854.392 72.488 854.392 74.6V105.416C854.392 107.336 853.72 109.064 852.376 110.6C851.032 111.944 849.304 112.616 847.192 112.616H795.928V261.8C795.928 263.912 795.256 265.64 793.912 266.984C792.568 268.328 790.84 269 788.728 269H750.712ZM887.766 269C885.654 269 883.926 268.328 882.582 266.984C881.238 265.64 880.566 263.912 880.566 261.8V74.6C880.566 72.488 881.238 70.76 882.582 69.416C883.926 68.072 885.654 67.4 887.766 67.4H1022.26C1024.37 67.4 1026.1 68.072 1027.45 69.416C1028.79 70.76 1029.46 72.488 1029.46 74.6V101.672C1029.46 103.784 1028.79 105.512 1027.45 106.856C1026.1 108.2 1024.37 108.872 1022.26 108.872H930.39V147.752H1015.93C1018.04 147.752 1019.77 148.52 1021.11 150.056C1022.45 151.4 1023.13 153.128 1023.13 155.24V180.296C1023.13 182.216 1022.45 183.944 1021.11 185.48C1019.77 186.824 1018.04 187.496 1015.93 187.496H930.39V227.528H1024.57C1026.68 227.528 1028.41 228.2 1029.75 229.544C1031.09 230.888 1031.77 232.616 1031.77 234.728V261.8C1031.77 263.912 1031.09 265.64 1029.75 266.984C1028.41 268.328 1026.68 269 1024.57 269H887.766ZM1071.7 269C1069.59 269 1067.86 268.328 1066.52 266.984C1065.18 265.64 1064.5 263.912 1064.5 261.8V74.6C1064.5 72.488 1065.18 70.76 1066.52 69.416C1067.86 68.072 1069.59 67.4 1071.7 67.4H1150.04C1174.81 67.4 1194.3 73.16 1208.5 84.68C1222.9 96.008 1230.1 112.136 1230.1 133.064C1230.1 146.696 1226.74 158.216 1220.02 167.624C1213.5 177.032 1204.86 184.136 1194.1 188.936L1233.85 259.784C1234.42 260.936 1234.71 261.992 1234.71 262.952C1234.71 264.488 1234.04 265.928 1232.7 267.272C1231.54 268.424 1230.1 269 1228.38 269H1190.36C1186.71 269 1184.02 268.136 1182.3 266.408C1180.57 264.488 1179.32 262.76 1178.55 261.224L1145.72 197.864H1116.06V261.8C1116.06 263.912 1115.38 265.64 1114.04 266.984C1112.7 268.328 1110.97 269 1108.86 269H1071.7ZM1116.06 157.256H1149.46C1158.49 157.256 1165.21 155.048 1169.62 150.632C1174.23 146.216 1176.54 140.168 1176.54 132.488C1176.54 125 1174.33 118.952 1169.91 114.344C1165.69 109.736 1158.87 107.432 1149.46 107.432H1116.06V157.256Z"/>
                            <path className="logo-face" d="M290 166.186C290 241.027 226.351 279 147.835 279C69.3196 279 77.5 235.342 77.5 160.5C77.5 85.6584 69.3196 51 147.835 51C226.351 51 290 91.3442 290 166.186Z"/>
                            <path className="logo-mouth" d="M145 234.5C145 241.956 134.926 248 122.5 248C110.074 248 103.5 241.956 103.5 234.5C103.5 227.044 110.074 221 122.5 221C134.926 221 145 227.044 145 234.5Z"/>
                            <g filter="url(#filter0_d_18_2)">
                            <rect className="logo-goggle" x="50" y="120" width="130" height="64" rx="32" fill="#14dca0"/>
                            </g>
                            <path className="logo-shine" d="M77.5 152C77.5 162.493 78.1797 171 71 171C63.8203 171 58 162.493 58 152C58 141.507 63.8203 133 71 133C78.1797 133 77.5 141.507 77.5 152Z"/>
                            <defs>
                            <filter id="filter0_d_18_2" x="0" y="70" width="230" height="164" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset/>
                            <feGaussianBlur stdDeviation="25"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.17 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_18_2"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_18_2" result="shape"/>
                            </filter>
                            </defs>
                            </svg>
                        </div>
                        <Badge key={guid()} className="logo-badge" pill>v2</Badge>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/"><i className="icon-navbar color-1 bi bi-house"></i>Home</Nav.Link>
                                <Nav.Link as={Link} to="/search"><i className="icon-navbar color-1 bi bi-search"></i>Search</Nav.Link>
                            </Nav>
                            <button className="dester-round-button" onClick={() => (setDiffTheme())}>{theme === "light" ? <i className="bi bi-moon-stars-fill"></i> : <i className="bi bi-sun-fill"></i>}</button>
                            {user && (
                                <NavDropdown className="user-profile-button" title={<div className="profile-avatar-wrapper"><img className="profile-avatar" src={user.picture} alt="" /></div>}>
                                    <Dropdown.Item href="#/action-1"><i class="bi bi-person-fill"></i>&nbsp;{user.name}</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2"><i className="bi bi-gear-fill"></i>&nbsp;Settings</Dropdown.Item>
                                    <Dropdown.Item onClick={() => logout({ returnTo: window.location.origin })} href="#/action-2"><i class="bi bi-box-arrow-left"></i>&nbsp;Log out</Dropdown.Item>
                                </NavDropdown>
                            )}
                            {!user && (
                                <NavDropdown className="user-profile-button" title={<i className="bi bi-person-circle"></i>}>
                                    <Dropdown.Item onClick={() => logout({ returnTo: window.location.origin })} href="#/action-2"><i class="bi bi-box-arrow-right"></i>&nbsp;Log in</Dropdown.Item>
                                </NavDropdown>
                            )}
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            )}
            {type === "mobile" && (
                <Nav className="navbar-mobile mobile-display fixed-bottom justify-content-between" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link as={Link} to="/">
                            <div className="logo-small">
                                <svg className="logo-small-svg" viewBox="0 0 290 228" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className="logo-face" d="M290 115.186C290 190.027 226.351 228 147.835 228C69.3196 228 77.5 184.342 77.5 109.5C77.5 34.6584 69.3196 0 147.835 0C226.351 0 290 40.3442 290 115.186Z"/>
                                    <path className="logo-mouth" d="M144.5 184.5C144.5 191.956 134.426 198 122 198C109.574 198 103 191.956 103 184.5C103 177.044 109.574 171 122 171C134.426 171 144.5 177.044 144.5 184.5Z" fill="white"/>
                                    <g filter="url(#filter0_d_24_6)">
                                    <rect className="logo-goggle" x="50" y="69" width="130" height="64" rx="32"/>
                                    </g>
                                    <path className="logo-shine" d="M76.5 101C76.5 111.493 77.1797 120 70 120C62.8203 120 57 111.493 57 101C57 90.5066 62.8203 82 70 82C77.1797 82 76.5 90.5066 76.5 101Z"/>
                                    <defs>
                                    <filter id="filter0_d_24_6" x="0" y="19" width="230" height="164" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset/>
                                    <feGaussianBlur stdDeviation="25"/>
                                    <feComposite in2="hardAlpha" operator="out"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_24_6"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_24_6" result="shape"/>
                                    </filter>
                                    </defs>
                                </svg>
                            </div>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/"><i className="icon-navbar color-2 bi bi-search"></i></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/"><i className="icon-navbar color-2 bi bi-collection-fill"></i></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/"><i className="icon-navbar color-2 bi bi-gear-fill"></i></Nav.Link>
                    </Nav.Item>
                </Nav>
            )}
            {type === "desktopPlaceholder" && (
                <Navbar className="navbar-desktop desktop-display" expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                    <div className="logo-full d-inline-block align-top">
                        <svg className="logo-full-svg" viewBox="0 0 1244 341" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="logo-start-text" d="M331.36 269C329.248 269 327.52 268.328 326.176 266.984C324.832 265.64 324.16 263.912 324.16 261.8V74.6C324.16 72.488 324.832 70.76 326.176 69.416C327.52 68.072 329.248 67.4 331.36 67.4H465.856C467.968 67.4 469.696 68.072 471.04 69.416C472.384 70.76 473.056 72.488 473.056 74.6V101.672C473.056 103.784 472.384 105.512 471.04 106.856C469.696 108.2 467.968 108.872 465.856 108.872H373.984V147.752H459.52C461.632 147.752 463.36 148.52 464.704 150.056C466.048 151.4 466.72 153.128 466.72 155.24V180.296C466.72 182.216 466.048 183.944 464.704 185.48C463.36 186.824 461.632 187.496 459.52 187.496H373.984V227.528H468.16C470.272 227.528 472 228.2 473.344 229.544C474.688 230.888 475.36 232.616 475.36 234.728V261.8C475.36 263.912 474.688 265.64 473.344 266.984C472 268.328 470.272 269 468.16 269H331.36ZM583.266 271.88C564.066 271.88 548.13 269.192 535.458 263.816C522.786 258.248 513.186 251.048 506.658 242.216C500.13 233.384 496.674 223.976 496.29 213.992C496.29 212.456 496.866 211.112 498.018 209.96C499.362 208.616 500.898 207.944 502.626 207.944H538.914C541.602 207.944 543.618 208.424 544.962 209.384C546.498 210.344 547.842 211.592 548.994 213.128C550.53 216.008 552.642 218.792 555.33 221.48C558.21 224.168 561.858 226.376 566.274 228.104C570.882 229.64 576.546 230.408 583.266 230.408C594.402 230.408 602.754 228.68 608.322 225.224C614.082 221.768 616.962 217.064 616.962 211.112C616.962 206.888 615.426 203.432 612.354 200.744C609.282 197.864 604.29 195.368 597.378 193.256C590.658 190.952 581.634 188.648 570.306 186.344C555.714 183.272 543.234 179.336 532.866 174.536C522.69 169.544 514.914 163.112 509.538 155.24C504.162 147.176 501.474 137.192 501.474 125.288C501.474 113.576 504.738 103.112 511.266 93.896C517.986 84.68 527.298 77.48 539.202 72.296C551.106 67.112 565.218 64.52 581.538 64.52C594.786 64.52 606.402 66.248 616.386 69.704C626.562 73.16 635.106 77.768 642.018 83.528C648.93 89.288 654.114 95.432 657.57 101.96C661.218 108.296 663.138 114.536 663.33 120.68C663.33 122.216 662.754 123.656 661.602 125C660.45 126.152 659.01 126.728 657.281 126.728H619.266C617.154 126.728 615.33 126.344 613.794 125.576C612.258 124.808 610.914 123.56 609.762 121.832C608.61 117.608 605.538 113.96 600.546 110.888C595.746 107.624 589.41 105.992 581.538 105.992C573.09 105.992 566.466 107.528 561.666 110.6C557.058 113.48 554.754 117.992 554.754 124.136C554.754 127.976 556.002 131.336 558.498 134.216C561.186 137.096 565.506 139.592 571.458 141.704C577.602 143.816 585.954 146.024 596.514 148.328C613.986 151.592 628.098 155.72 638.85 160.712C649.602 165.512 657.474 171.848 662.466 179.72C667.458 187.4 669.954 197.096 669.954 208.808C669.954 221.864 666.21 233.192 658.722 242.792C651.426 252.2 641.25 259.4 628.194 264.392C615.138 269.384 600.162 271.88 583.266 271.88Z"/>
                        <path className="logo-end-text" d="M750.712 269C748.6 269 746.872 268.328 745.528 266.984C744.184 265.64 743.512 263.912 743.512 261.8V112.616H692.248C690.136 112.616 688.408 111.944 687.064 110.6C685.72 109.064 685.048 107.336 685.048 105.416V74.6C685.048 72.488 685.72 70.76 687.064 69.416C688.408 68.072 690.136 67.4 692.248 67.4H847.192C849.304 67.4 851.032 68.072 852.376 69.416C853.72 70.76 854.392 72.488 854.392 74.6V105.416C854.392 107.336 853.72 109.064 852.376 110.6C851.032 111.944 849.304 112.616 847.192 112.616H795.928V261.8C795.928 263.912 795.256 265.64 793.912 266.984C792.568 268.328 790.84 269 788.728 269H750.712ZM887.766 269C885.654 269 883.926 268.328 882.582 266.984C881.238 265.64 880.566 263.912 880.566 261.8V74.6C880.566 72.488 881.238 70.76 882.582 69.416C883.926 68.072 885.654 67.4 887.766 67.4H1022.26C1024.37 67.4 1026.1 68.072 1027.45 69.416C1028.79 70.76 1029.46 72.488 1029.46 74.6V101.672C1029.46 103.784 1028.79 105.512 1027.45 106.856C1026.1 108.2 1024.37 108.872 1022.26 108.872H930.39V147.752H1015.93C1018.04 147.752 1019.77 148.52 1021.11 150.056C1022.45 151.4 1023.13 153.128 1023.13 155.24V180.296C1023.13 182.216 1022.45 183.944 1021.11 185.48C1019.77 186.824 1018.04 187.496 1015.93 187.496H930.39V227.528H1024.57C1026.68 227.528 1028.41 228.2 1029.75 229.544C1031.09 230.888 1031.77 232.616 1031.77 234.728V261.8C1031.77 263.912 1031.09 265.64 1029.75 266.984C1028.41 268.328 1026.68 269 1024.57 269H887.766ZM1071.7 269C1069.59 269 1067.86 268.328 1066.52 266.984C1065.18 265.64 1064.5 263.912 1064.5 261.8V74.6C1064.5 72.488 1065.18 70.76 1066.52 69.416C1067.86 68.072 1069.59 67.4 1071.7 67.4H1150.04C1174.81 67.4 1194.3 73.16 1208.5 84.68C1222.9 96.008 1230.1 112.136 1230.1 133.064C1230.1 146.696 1226.74 158.216 1220.02 167.624C1213.5 177.032 1204.86 184.136 1194.1 188.936L1233.85 259.784C1234.42 260.936 1234.71 261.992 1234.71 262.952C1234.71 264.488 1234.04 265.928 1232.7 267.272C1231.54 268.424 1230.1 269 1228.38 269H1190.36C1186.71 269 1184.02 268.136 1182.3 266.408C1180.57 264.488 1179.32 262.76 1178.55 261.224L1145.72 197.864H1116.06V261.8C1116.06 263.912 1115.38 265.64 1114.04 266.984C1112.7 268.328 1110.97 269 1108.86 269H1071.7ZM1116.06 157.256H1149.46C1158.49 157.256 1165.21 155.048 1169.62 150.632C1174.23 146.216 1176.54 140.168 1176.54 132.488C1176.54 125 1174.33 118.952 1169.91 114.344C1165.69 109.736 1158.87 107.432 1149.46 107.432H1116.06V157.256Z"/>
                        <path className="logo-face" d="M290 166.186C290 241.027 226.351 279 147.835 279C69.3196 279 77.5 235.342 77.5 160.5C77.5 85.6584 69.3196 51 147.835 51C226.351 51 290 91.3442 290 166.186Z"/>
                        <path className="logo-mouth" d="M145 234.5C145 241.956 134.926 248 122.5 248C110.074 248 103.5 241.956 103.5 234.5C103.5 227.044 110.074 221 122.5 221C134.926 221 145 227.044 145 234.5Z"/>
                        <g filter="url(#filter0_d_18_2)">
                        <rect className="logo-goggle" x="50" y="120" width="130" height="64" rx="32" fill="#14dca0"/>
                        </g>
                        <path className="logo-shine" d="M77.5 152C77.5 162.493 78.1797 171 71 171C63.8203 171 58 162.493 58 152C58 141.507 63.8203 133 71 133C78.1797 133 77.5 141.507 77.5 152Z"/>
                        <defs>
                        <filter id="filter0_d_18_2" x="0" y="70" width="230" height="164" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="25"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.17 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_18_2"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_18_2" result="shape"/>
                        </filter>
                        </defs>
                        </svg>
                    </div>
                    <Badge key={guid()} className="logo-badge" pill>v2</Badge>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/"><i className="icon-navbar color-1 bi bi-house"></i>Home</Nav.Link>
                            <Nav.Link href="/"><i className="icon-navbar color-1 bi bi-search"></i>Search</Nav.Link>
                        </Nav>
                        {/* <NavDropdown className="user-profile-button" title={<>{user ? user.name : <i className="bi bi-person-circle"></i>}</>}>
                        {!isLoading && user && 
                        (<>
                            <Dropdown.Item href="#/action-1"><i class="bi bi-person-fill"></i>&nbsp;Profile</Dropdown.Item>
                            <Dropdown.Item href="#/action-2"><i className="bi bi-gear-fill"></i>&nbsp;Settings</Dropdown.Item>
                            <Dropdown.Item href="#/action-2"><i class="bi bi-box-arrow-left"></i>&nbsp;Log out</Dropdown.Item>
                        </>)}
                        </NavDropdown> */}
                        <button className="dester-round-button" onClick={() => (setDiffTheme())}>{theme === "light" ? <i className="bi bi-moon-stars-fill"></i> : <i className="bi bi-sun-fill"></i>}</button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            )}
            {type === "mobilePlaceholder" && (
                <Nav className="navbar-mobile mobile-display fixed-bottom justify-content-between" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/">
                            <div className="logo-small">
                                <svg className="logo-small-svg" viewBox="0 0 290 228" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className="logo-face" d="M290 115.186C290 190.027 226.351 228 147.835 228C69.3196 228 77.5 184.342 77.5 109.5C77.5 34.6584 69.3196 0 147.835 0C226.351 0 290 40.3442 290 115.186Z"/>
                                    <path className="logo-mouth" d="M144.5 184.5C144.5 191.956 134.426 198 122 198C109.574 198 103 191.956 103 184.5C103 177.044 109.574 171 122 171C134.426 171 144.5 177.044 144.5 184.5Z" fill="white"/>
                                    <g filter="url(#filter0_d_24_6)">
                                    <rect className="logo-goggle" x="50" y="69" width="130" height="64" rx="32"/>
                                    </g>
                                    <path className="logo-shine" d="M76.5 101C76.5 111.493 77.1797 120 70 120C62.8203 120 57 111.493 57 101C57 90.5066 62.8203 82 70 82C77.1797 82 76.5 90.5066 76.5 101Z"/>
                                    <defs>
                                    <filter id="filter0_d_24_6" x="0" y="19" width="230" height="164" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset/>
                                    <feGaussianBlur stdDeviation="25"/>
                                    <feComposite in2="hardAlpha" operator="out"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_24_6"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_24_6" result="shape"/>
                                    </filter>
                                    </defs>
                                </svg>
                            </div>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/"><i className="icon-navbar color-2 bi bi-search"></i></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/"><i className="icon-navbar color-2 bi bi-collection-fill"></i></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/"><i className="icon-navbar color-2 bi bi-gear-fill"></i></Nav.Link>
                    </Nav.Item>
                </Nav>
            )}
        </>
    );
};

export default NavUI;

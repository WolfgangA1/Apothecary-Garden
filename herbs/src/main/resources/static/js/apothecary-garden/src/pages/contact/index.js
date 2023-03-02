import React from "react";
import github from '../../assests/images/github-mark.png';
import linkedIn from '../../assests/images/linkedIn.png';
import profileDom from '../../assests/images/Dom.jpg';
import profileDonna from '../../assests/images/donna-profile-pic.jpg';
import profileNate from '../../assests/images/Profile-pic-nate.jpg';
import profileNuhamin from '../../assests/images/nuhamin.jpg';
import profileWolf from '../../assests/images/profileWolf.JPG';
import style from './style.module.scss'

const ContactPage = () => {

    return (
        <div className={style.contact_page}>

        <section class="team">
            <h1>OUR TEAM</h1>
            </section>
            <section className={style.profiles}>
                <article className={style.profile_column}>
                    <h2 className={style.profile_name}>NATE CAMPBELL</h2>
                    <img src={profileNate} className={style.profile_img} alt="profile pic nate">
                    </img>
                    <p className={style.position_title}>DEVELOPER</p>
                    <p className={style.personal_description}>Nathan is an Aerospace Engineer currently enrolled in the WCCI coding bootcamp.  he plans to become a full stack developer within the technology industry utilizing his background in aerospace technology development to build a career creating software to further the industry</p>
                    <a href='https://github.com/campbene'><img src={github} alt='Github Logo'></img></a>
                    <a href='https://www.linkedin.com/in/nathancampbell2020/'><img src={linkedIn} alt='LinkedIn Logo'></img></a>
                </article>
                <article className={style.profile_column}>
                    <h2 className={style.profile_name}>DONNA MAGBAG</h2>
                    <img src={profileDonna} className={style.profile_img} alt="profile pic donna">
                    </img>
                    <p className={style.position_title}>DEVELOPER</p>
                    <p className={style.personal_description}>Donna is currently a Licensed Massage Therapist pursuing a career in software development as a full stack developer. She developed skills, abilities, and experience from the We Can Code It coding boot camp and selfstudy. She has a B.S. in Chemical Engineering and developed technical competence and complex problem-solving abilities from working in the pharmaceutical industry for almost 10 years. She looks forward to transitioning from massage therapy to software development so that she could contribute to the world of technology.</p>
                    <a href='https://github.com/WolfgangA1'><img src={github} alt='Github Logo'></img></a>
                    <a href='https://github.com/WolfgangA1'><img src={linkedIn} alt='LinkedIn Logo'></img></a>
                </article>
                <article className={style.profile_column}>
                    <h2 className={style.profile_name}>WOLFGANG ASHCRAFT</h2>
                    <img src={profileWolf} className={style.profile_img} alt="profile pic wolfgang">
                    </img> 
                    <p className={style.position_title}>DEVELOPER</p>
                    <p className={style.personal_description}>Wolf is a current Student at WCCI pursuing a career in software development. I'm a fabricator transitioning into a Software Development role after completing We Can Code IT Bootcamp. Hands-on project experience building both the front-end and back-end of web apps using Node.js, React.js, ASP.NET, and other frameworks.</p>
                    <a href='https://github.com/WolfgangA1'><img src={github} alt='Github Logo'></img></a>
                    <a href='https://www.linkedin.com/in/wolfgang-ashcraft/'><img src={linkedIn} alt='LinkedIn Logo'></img></a>
                </article>
                <article className={style.profile_column}>
                    <h2 className={style.profile_name}>DOMINIQUE HAWKINS</h2>
                    <img src={profileDom} className={style.profile_img} alt="profile pic Dominique">
                    </img>
                    <p className={style.position_title}>DEVELOPER</p>
                    <p className={style.personal_description}>Dom is a former Service Delivery Coordinator transitioning into a Software Development role after completing We Can Code IT Bootcamp. Hands-on project experience building both the front-end and back-end of web apps using JavaScript,Node.js, React.js, Spring Boot, SQL and other frameworks.</p>
                    <a href='https://github.com/Dhawkins777'><img src={github} alt='Github Logo'></img></a>
                    <a href='https://www.linkedin.com/in/dominique-hawkins-565346259/'><img src={linkedIn} alt='LinkedIn Logo'></img></a>
                </article>
                <article className={style.profile_column}>
                    <h2 className={style.profile_name}>NUHAMIN TESFAYE</h2>
                    <img src={profileNuhamin} className={style.profile_img} alt="profile pic Nuhamin">
                    </img>
                    <p className={style.position_title}>DEVELOPER</p>
                    <p className={style.personal_description}>Nuhamin is a current Student at WCCI pursuing a career in software development.</p>
                    <a href='https://github.com/WolfgangA1'><img src={github} alt='Github Logo'></img></a>
                    <a href='https://github.com/WolfgangA1'><img src={linkedIn} alt='LinkedIn Logo'></img></a>
                </article>
            </section>
        </div>
    );
};

export default ContactPage;
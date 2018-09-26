import React, { Component } from 'react';
import { Header }           from './Header.js';
import { AboutMe }          from './AboutMe.js';
import { SkillHighlights }  from './SkillHighlights.js';
import { Projects }         from './Projects.js';
import { FeaturedBlog }     from './FeaturedBlog.js';
import { Instagram }        from './Instagram.js'
import { ContactInfo }      from './ContactInfo.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AboutMe text={ aboutMe } />
        <SkillHighlights skill={ skills } />
        <Projects projects={ projects }/>
        <FeaturedBlog />
        <Instagram />
        <ContactInfo />
      </div>
    );
  }
}

const aboutMe = "Hello! i'm Jessica Prieto. I graduated from University of Alberta \
  with a degree in Computer Engineering. I am passionate at creating mobile applications, \
  currently Android applications, and I'm absolutetly dedicated to discover more and more \
  techniques and to keep updated with the technologies. I also have a knack for web applications  \
  building back-end services for websites and coming up with the UI/UX design ideas.";

const skills = {
  'A' : {
    'name' : 'Web Dev',
    'imgUrl' : './assets/icons/ic_desktop.png',
    'description' : 'My first ever dev experience was creating a simple website with HTTP and CSS. \
    I then started using different frameworks such as Jquery and Bootstrap. I enjoy playing around and \
    creating a website from scratch and designing the look of the website. I also enjoy creating the \
    backend services for sites. I have experience working with ASP.NET and was able to get a summer \
    internship dealing with web apps, and I also experienced dealing with databases for the web.'
  },
  'B' : {
    'name' : 'Mobile Dev',
    'imgUrl' : './assets/icons/ic_phone_android.png',
    'description' : 'Android dev is currently my favourite. Since the first time I built an Android app for \
    one of my courses, I knew I wanted to o more. I really have gotten the hang of working with Android Studio. \
    I have already developed some of my future goals in mobile dev: first would be to explore creating a library \
    in Android to easily render views that will be most likely based on Material Design standards. At some point, \
    I would also to expand my mobile development knowledge by exploring Swift and learning to built iOS applications. \
    I would also like to dive in to building native apps with React Native.'
  },
  'C' : {
    'name' : 'Hobbies',
    'imgUrl' : './assets/icons/ic_lightbulb.png',
    'description' : 'I love going outdoors! I always go on yearly summer activities with my family which includes hiking, \
    camping, and going on roadtrips wich each year always beating the last. I also love going on vacations and flying to \
    places with my boyfiend. We love collecting memories through our video travel diaries. I\'m also interested in doing a \
    little bit of photography. I also like singing and plating instruments. Another highlight of my undergrad was joining the \
    yearly battle of the bands from my first year until my last.'
  }
}

const projects = {
  'A' : {
    'name' : 'Hotspot',
    'imgUrl' : '/assets/projects/hotspot2.jpg',
    'desc' : 'This is hotspot'
  },
  'B' : {
    'name' : 'DigiExpress',
    'imgUrl' : '/assets/projects/digiexpress3.jpg',
    'desc' : 'bdesc'
  },
  'C' : {
    'name' : 'Blog Generator',
    'imgUrl' : '/assets/projects/blog-generator.jpg',
    'desc' : 'cdesc'
  },


}

export default App;


import { useEffect } from 'react';
import Banner from '../components/Banner.js';
import Header from '../components/Header.js';
import Main from '../components/Main.js';
import Footer from '../components/Footer.js';

function Home() {
	const select = (el, all = false) => {
		let elem = el.trim()
		if (all) {
			return [...document.querySelectorAll(elem)]
		} else {
			return document.querySelector(elem)
		}
	}

	const reveal = () => {
		var reveals = document.querySelectorAll(".reveal");
		for (var i = 0; i < reveals.length; i++) {
		  	var windowHeight = window.innerHeight;
		  	var elementTop = reveals[i].getBoundingClientRect().top;
		  	var elementVisible = 150;
	  
		  if (elementTop < windowHeight - elementVisible) {
			reveals[i].classList.add("active");
		  } else {
			reveals[i].classList.remove("active");
		  }
		}
	}
	
	useEffect(() => {
		let selectHeader = select('#header')
		if (selectHeader) {
			const headerScrolled = () => {
				if (window.scrollY > 125) {
					selectHeader.classList.add('header-scrolled')
				} else {
					selectHeader.classList.remove('header-scrolled')
				}
			}
			window.addEventListener('load', headerScrolled)
			window.addEventListener('scroll', headerScrolled)
		}
		  
		  window.addEventListener("scroll", reveal);
	  }, []);
	return (
		<div>
			<Header />
			<Banner />
			<Main />
			<Footer />
		</div>
	);
}

export default Home;

import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import img1 from "../Assets/image-1.png";
import img2 from "../Assets/image-2.png";
import img3 from "../Assets/image-3.png";
import img4 from "../Assets/image-4.png";
import img5 from "../Assets/image-5.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

export const Homepage = () => {
	const [cardClicked, setCardClicked] = useState(false);
	const [cardRef, setCardRef] = useState(null);
	const [cardRef2, setCardRef2] = useState(null);
	const card2 = useRef();
	const card3 = useRef();
	const card4 = useRef();
	const card5 = useRef();
	const card6 = useRef();
	const handleMenuClicked = (ref, ref2) => {
		setCardRef(ref);
		setCardRef2(ref2);
		setCardClicked(!cardClicked);
	};

	useGSAP(() => {
		gsap.from(".CardContainer", {
			opacity: 0,
			stagger: 0.2,
			duration: 0.4,
			x: -10,
			y: 0,
		});
	}, []);

	useGSAP(() => {
		let tl = gsap.timeline();
		if (cardRef2 && cardRef) {
			if (cardClicked) {
				tl.to(cardRef, {
					rotationY: 100,
					duration: 0.3,
					opacity: 0,
					position: "absolute",
					display: "none",
				}).to(cardRef2, {
					rotationY: 0,
					duration: 0.2,
					opacity: 1,
					position: "relative",
					display: "block",
				});
			} else {
				tl.to(cardRef2, {
					rotationY: 100,
					duration: 0.3,
					opacity: 0,
					position: "absolute",
					display: "none",
				}).to(cardRef, {
					rotationY: 0,
					duration: 0.2,
					opacity: 1,
					position: "relative",
					display: "block",
				});
			}
		}
	}, [cardClicked, cardRef, cardRef2]);

	return (
		<Wrapper>
			<Container>
				<NavigationContainer></NavigationContainer>
				<ContentWrapper>
					<CardContainer className="a CardContainer">
						<img
							src={img1}
							alt=""
						/>
					</CardContainer>
					<CardContainer
						className="b CardContainer SetHeightSm"
						onClick={() => handleMenuClicked(".front1", ".back1")}
					>
						<FlipCard
							ref={card2}
							src={img5}
							alt=""
							className="front1"
						/>
						<FlipCard
							ref={card6}
							src={img4}
							alt=""
							className="back1"
						/>
					</CardContainer>
					<CardContainer className="c CardContainer">
						<img
							ref={card3}
							src={img2}
							alt=""
						/>
					</CardContainer>
					<CardContainer
						className="d CardContainer"
						onClick={() => handleMenuClicked(".front2", ".back2")}
					>
						<FlipCard
							src={img3}
							ref={card4}
							alt=""
							className="front2"
						/>
						<FlipCard
							src={img4}
							ref={card5}
							alt=""
							className="back2"
						/>
					</CardContainer>
					<CardContainer
						className="e CardContainer SetHeightLg"
						onClick={() => handleMenuClicked(".front3", ".back3")}
					>
						<FlipCard
							src={img4}
							ref={card5}
							alt=""
							className="front3"
						/>
						<FlipCard
							src={img3}
							ref={card4}
							alt=""
							className="back3"
						/>
					</CardContainer>
				</ContentWrapper>
			</Container>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	background-color: #fff;
	width: 100vw;
	height: 100vh;
	display: grid;
	grid-template-columns: 1fr;
	place-items: center;
`;

const Container = styled.div`
	margin: 10px auto;
	display: flex;
	background-color: #fff;
	border-radius: 50px;
	width: 98%;
	@media (max-width: 1000px) {
		width: 95%;
		margin: 15px auto;
	}
`;
const CardContainer = styled.div`
	opacity: 1.1;
	transform: translateX(0) translateY(0);

	@media (max-width: 950px) {
		&.SetHeightSm {
			height: 40vh;
		}
		&.SetHeightLg {
			height: 77vh;
		}
	}
`;

const ContentWrapper = styled.div`
	width: 100%;
	display: grid;
	border-radius: 50px;
	column-gap: 15px;
	row-gap: 10px;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-areas:
		"a a a b"
		"c c d e";
	div {
		img {
			border-radius: 25px;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	@media (max-width: 1000px) {
		grid-template-columns: 1fr 1fr;
		grid-template-areas:
			"a a"
			"b d"
			"e e"
			"c c";
	}
`;

const NavigationContainer = styled.div`
	width: 100px;
	display: flex;
	flex-direction: column;
	@media (max-width: 1000px) {
		display: none;
	}
`;

const FlipCard = styled.img`
	width: 100%;
	height: 100%;
	backface-visibility: hidden;
	&.front1,
	&.front2,
	&.front3 {
		position: relative;
		display: block;
		transform: rotateY(0deg);
		opacity: 1;
	}
	&.back1,
	&.back2,
	&.back3 {
		position: absolute;
		display: none;
		transform: rotateY(180deg);
		opacity: 0;
	}
`;

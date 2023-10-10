import React, { useEffect, useState } from 'react'
import './Home.css';
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import moonImage from '../../images/Home/moon.jpg';
import earthImage from '../../images/Home/earth.jpg';
import sunImage from '../../images/Home/sun-4.png';
import { Typography } from '@mui/material';
import TimeLine from '../my_timeline/Timeline';
import {
    SiCplusplus,
    SiReact,
    SiJavascript,
    SiMongodb,
    SiNodedotjs,
    SiExpress,
    SiCss3,
    SiHtml5,
    SiThreedotjs,
} from "react-icons/si";
import YoutubeCard from '../YoutubeCard/YoutubeCard';

function Home() {

    useEffect(() => {

        let moonRotationAngle = 0;
        const moonOrbitRadius = 4;
        const moonRotationSpeed = 0.01;

        const textureLoader = new THREE.TextureLoader();

        const moonTexture = textureLoader.load(moonImage);
        const earthTexture = textureLoader.load(earthImage);
        const sunTexture = textureLoader.load(sunImage);
        // const spaceTexture = textureLoader.load(spaceImage);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 0, 10);

        const canvas = document.querySelector('.homeCanvas');
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });

        // const moonGeometry = new THREE.SphereGeometry(0.3, 64, 64);
        // const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
        // const moon = new THREE.Mesh(moonGeometry, moonMaterial);
        // moon.position.set(-4, 0, 2); // x, y, z

        // const earthGeometry = new THREE.SphereGeometry(3, 64, 64);
        // const earthMaterial = new THREE.MeshStandardMaterial({ map: earthTexture });
        // const earth = new THREE.Mesh(earthGeometry, earthMaterial);
        // // earth.position.set(8, 5, 5);

        // const sunGeometry = new THREE.SphereGeometry(4, 64, 64);
        // const sunMaterial = new THREE.MeshBasicMaterial({ map: sunTexture });
        // const sun = new THREE.Mesh(sunGeometry, sunMaterial);
        // sun.position.set(8, 5, 5);

        const earthGeometry = new THREE.SphereGeometry(10, 64, 64);
        const earthMaterial = new THREE.MeshStandardMaterial({ map: earthTexture });
        const earth = new THREE.Mesh(earthGeometry, earthMaterial);
        earth.position.set(0, -10, 0);

        const sunGeometry = new THREE.SphereGeometry(0.8, 32, 32);
        const sunMaterial = new THREE.MeshBasicMaterial({ map: sunTexture });
        const sun = new THREE.Mesh(sunGeometry, sunMaterial);
        sun.position.set(0, 1, 0);

        sunMaterial.color = new THREE.Color(0xfce47c);

        const light = new THREE.PointLight(0xffffff, 1, 100);
        const light2 = new THREE.PointLight(0xffffff, 0.1);

        light.position.set(0, 3, 0)
        light2.position.set(-8, -5, -5)

        // const lightHelper = new THREE.PointLightHelper(light);

        const controls = new OrbitControls(camera, renderer.domElement);

        // scene.add(moon);
        scene.add(earth);
        scene.add(sun);
        scene.add(light);
        // scene.add(light2);
        // scene.background = spaceTexture;

        // camera.position.set(0, 0, 25);
        // camera.lookAt(earth.position);

        const ambientLight = new THREE.AmbientLight(0x404040); // A grayish ambient light
        scene.add(ambientLight);
        // scene.add(lightHelper)

        const animate = () => {
            requestAnimationFrame(animate);
            // moon.rotation.y += 0.001;
            earth.rotation.y += 0.01;
            sun.rotation.y += 0.0001;
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.render(scene, camera);
        }

        function animateMoonRotation() {

            moonRotationAngle += moonRotationSpeed;

            const moonX = Math.cos(moonRotationAngle) * moonOrbitRadius;
            const moonZ = Math.sin(moonRotationAngle) * moonOrbitRadius;

            // moon.position.set(moonX, 1, moonZ);

            requestAnimationFrame(animateMoonRotation);
        }

        animate();
        animateMoonRotation();

    }, []);

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className='home'>
            <canvas className='homeCanvas'></canvas>

            <div className='homeContainer'>
                <Typography variant='h3'>TIMELINE</Typography>
                <TimeLine timelines={[1, 2, 3, 4]} />
            </div>

            <div className='homeSkills'>
                <Typography variant='h3'>SKILLS</Typography>

                <div className={`homeCubeSkills ${isHovered ? 'stopAnimationOnHover' : ''}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >

                    <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
                        <img src='https://avatars.mds.yandex.net/i?id=e302e7822a9f77c6eaf0bd12b18839897b0fb313-8343339-images-thumbs&n=13' alt="Face1" />
                    </div>

                    <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
                        <img src='https://i.imgur.com/sr3Devb.jpg' alt="Face2" />
                    </div>

                    <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
                        <img src='https://ddgimgs-f43e.kxcdn.com/1866670/64lqpd_54c2e22d1fc78eb00a2f6f81db3b83ee19b6f19f.jpg' alt="Face3" />
                    </div>

                    <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
                        <img src='https://ddgimgs-f43e.kxcdn.com/1901417/6pztl5_9af91089c69f8114e2b8e8f9aaded3bca25a8ada.jpg' alt="Face4" />
                    </div>

                    <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
                        <img src='https://ddgimgs-f43e.kxcdn.com/1909398/7e5hdl_2689530945933ffc72a3e4e954a56de596ac9d5b.jpg' alt="Face5" />
                    </div>

                    <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
                        <img src='https://img.devilchan.com/original/2022/06/26/20/16/24855/genshin-impact-anime-girl-belly-24855-1368x1800.jpeg' alt="Face6" />
                    </div>
                </div>

                <div className={`cubeShadow ${isHovered ? 'stopAnimationOnHover' : ''}`}></div>

                <div className="homeSkillsBox" id="homeSkillsBox">
                    <SiCplusplus />
                    <SiHtml5 />
                    <SiCss3 />
                    <SiJavascript />
                    <SiMongodb />
                    <SiExpress />
                    <SiReact />
                    <SiNodedotjs />
                    <SiThreedotjs />
                </div>
            </div>

            <div className="homeYoutube">
                <Typography variant="h3"> YOUTUBE VIDEOS</Typography>

                <div className="homeYoutubeWrapper">
                    {/* {youtubes.map((item) => (
                        <YoutubeCard
                            image={item.image.url}
                            title={item.title}
                            url={item.url}
                            id={item._id}
                            key={item._id}
                        />
                    ))} */}
                    <YoutubeCard image="https://ddgimgs-f43e.kxcdn.com/1909398/7e5hdl_2689530945933ffc72a3e4e954a56de596ac9d5b.jpg" title='Sample Video' />
                    <YoutubeCard image="https://ddgimgs-f43e.kxcdn.com/1909398/7e5hdl_2689530945933ffc72a3e4e954a56de596ac9d5b.jpg" title='Sample Video' />
                    <YoutubeCard image="https://ddgimgs-f43e.kxcdn.com/1909398/7e5hdl_2689530945933ffc72a3e4e954a56de596ac9d5b.jpg" title='Sample Video' />
                    <YoutubeCard image="https://ddgimgs-f43e.kxcdn.com/1909398/7e5hdl_2689530945933ffc72a3e4e954a56de596ac9d5b.jpg" title='Sample Video' />
                    <YoutubeCard image="https://ddgimgs-f43e.kxcdn.com/1909398/7e5hdl_2689530945933ffc72a3e4e954a56de596ac9d5b.jpg" title='Sample Video' />
                    <YoutubeCard image="https://ddgimgs-f43e.kxcdn.com/1909398/7e5hdl_2689530945933ffc72a3e4e954a56de596ac9d5b.jpg" title='Sample Video' />
                </div>
            </div>

        </div >
    )
}

export default Home

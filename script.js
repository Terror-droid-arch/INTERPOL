// Three.js сцена
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.querySelector('.hero').appendChild(renderer.domElement);

// 3D-сфера (вместо куба)
const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshBasicMaterial({ 
    color: 0x00ff00,
    wireframe: true
});
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);
camera.position.z = 3;

// Интерактивность: меняем цвет при наведении на кнопку
document.querySelector('.tg-button').addEventListener('mouseenter', () => {
    material.color.setHex(0xff0000); // Красный
});
document.querySelector('.tg-button').addEventListener('mouseleave', () => {
    material.color.setHex(0x00ff00); // Зеленый
});

// Кастомный курсор
const cursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Частицы
particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#00ff00" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: "#00ff00", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out" }
    },
    interactivity: {
        events: {
            onhover: { enable: true, mode: "repulse" }
        }
    }
});

// Анимация GSAP
gsap.from("h1", { opacity: 0, y: -50, duration: 1 });
gsap.from(".tg-button", { opacity: 0, y: 50, duration: 1, delay: 0.5 });

// Главный цикл анимации
function animate() {
    requestAnimationFrame(animate);
    sphere.rotation.x += 0.005;
    sphere.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();
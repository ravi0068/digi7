document.addEventListener("DOMContentLoaded", () => {
  gsap.from(".neon", {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out",
    onComplete: () => {
      gsap.to(".neon", {
        opacity: 1,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        boxShadow: "0px 0px 10px cyan"
      });
    }
  });
});



document.addEventListener('DOMContentLoaded', () => {
  // Create circuit pattern background
  const circuitBackground = document.querySelector('.circuit-background');
  
  function createCircuitNode() {
      const node = document.createElement('div');
      node.className = 'circuit-node';
      node.style.cssText = `
          position: absolute;
          width: 4px;
          height: 4px;
          background: #00ff00;
          border-radius: 50%;
          filter: blur(2px);
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          opacity: ${Math.random() * 0.5 + 0.2};
          animation: node-pulse ${Math.random() * 2 + 1}s infinite alternate;
      `;
      return node;
  }

  // Add circuit nodes
  for (let i = 0; i < 50; i++) {
      circuitBackground.appendChild(createCircuitNode());
  }

  // Add animation style
  const style = document.createElement('style');
  style.textContent = `
      @keyframes node-pulse {
          from { transform: scale(1); opacity: 0.2; }
          to { transform: scale(1.5); opacity: 0.5; }
      }
  `;
  document.head.appendChild(style);

  // Interactive hover effects for buttons
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(btn => {
      btn.addEventListener('mouseover', () => {
          btn.style.transform = 'translateY(-2px)';
          btn.style.boxShadow = '0 0 20px var(--primary-glow)';
      });

      btn.addEventListener('mouseout', () => {
          btn.style.transform = 'translateY(0)';
          btn.style.boxShadow = 'none';
      });
  });

  // Parallax effect for token visual
  const tokenVisual = document.querySelector('.token-visual');
  document.addEventListener('mousemove', (e) => {
      const x = (window.innerWidth / 2 - e.clientX) / 50;
      const y = (window.innerHeight / 2 - e.clientY) / 50;
      tokenVisual.style.transform = `translate(${x}px, ${y}px)`;
  });
});




/* --  Why Choose DIGI7 js  -- */



document.addEventListener('DOMContentLoaded', () => {
  // Set up polygon nodes
  const nodes = document.querySelectorAll('.node');
  const nodeCount = nodes.length;
  
  nodes.forEach((node, index) => {
      const angle = (index / nodeCount) * Math.PI * 2;
      const radius = 150;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      
      node.style.left = `calc(50% + ${x}px)`;
      node.style.top = `calc(50% + ${y}px)`;
  });

  // Add node connections
  const polygon = document.querySelector('.polygon');
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', '100%');
  svg.setAttribute('height', '100%');
  svg.style.position = 'absolute';
  svg.style.top = '0';
  svg.style.left = '0';
  svg.style.pointerEvents = 'none';
  
  for (let i = 0; i < nodeCount; i++) {
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      const startNode = nodes[i];
      const endNode = nodes[(i + 1) % nodeCount];
      
      line.setAttribute('x1', startNode.style.left);
      line.setAttribute('y1', startNode.style.top);
      line.setAttribute('x2', endNode.style.left);
      line.setAttribute('y2', endNode.style.top);
      line.setAttribute('stroke', '#00ff00');
      line.setAttribute('stroke-width', '2');
      line.setAttribute('opacity', '0.3');
      
      svg.appendChild(line);
  }
  
  polygon.appendChild(svg);

  // Add parallax effect
  document.addEventListener('mousemove', (e) => {
      const platform = document.querySelector('.platform');
      const rect = platform.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - centerX) / 30;
      const deltaY = (e.clientY - centerY) / 30;
      
      platform.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
  });

  // Add glow effect to nodes
  function animateNodes() {
      nodes.forEach((node, index) => {
          const delay = index * (2000 / nodeCount);
          node.style.animation = `nodeGlow 2s infinite ${delay}ms`;
      });
  }

  // Add the animation keyframes
  const style = document.createElement('style');
  style.textContent = `
      @keyframes nodeGlow {
          0%, 100% { 
              transform: scale(1);
              box-shadow: 0 0 20px var(--primary-glow);
          }
          50% { 
              transform: scale(1.5);
              box-shadow: 0 0 30px var(--primary-glow);
          }
      }
  `;
  document.head.appendChild(style);
  
  animateNodes();
});



  // Scroll Animation Script
  function revealOnScroll() {
    const section = document.getElementById("top-priorities");
    const cards = document.querySelectorAll(".priority-card");

    let sectionPosition = section.getBoundingClientRect().top;
    let screenHeight = window.innerHeight;

    if (sectionPosition < screenHeight - 100) {
        section.classList.add("show");
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add("show");
            }, index * 300);
        });
    }
}

window.addEventListener("scroll", revealOnScroll);



 // Matrix background effect
 const canvas = document.getElementById('matrix');
 const ctx = canvas.getContext('2d');

 canvas.width = window.innerWidth;
 canvas.height = window.innerHeight;

 const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%';
 const fontSize = 10;
 const columns = canvas.width / fontSize;

 const drops = [];
 for (let i = 0; i < columns; i++) {
     drops[i] = 1;
 }

 function drawMatrix() {
     ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
     ctx.fillRect(0, 0, canvas.width, canvas.height);

     ctx.fillStyle = '#0F0';
     ctx.font = fontSize + 'px monospace';

     for (let i = 0; i < drops.length; i++) {
         const text = characters.charAt(Math.floor(Math.random() * characters.length));
         ctx.fillText(text, i * fontSize, drops[i] * fontSize);

         if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
             drops[i] = 0;
         }
         drops[i]++;
     }
 }

 // Animate progress bars on scroll
 function animateProgressBars() {
     const progressBars = document.querySelectorAll('.progress-bar');
     progressBars.forEach(bar => {
         const width = bar.style.width;
         bar.style.width = '0%';
         setTimeout(() => {
             bar.style.width = width;
         }, 100);
     });
 }

 // Initialize animations
 window.addEventListener('load', () => {
     animateProgressBars();
     setInterval(drawMatrix, 50);
 });

 // Resize canvas on window resize
 window.addEventListener('resize', () => {
     canvas.width = window.innerWidth;
     canvas.height = window.innerHeight;
 });




// ---- roadmap js -------
document.addEventListener("DOMContentLoaded", function () {
    const timelineItems = document.querySelectorAll(".timeline ul li");
  
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function revealTimelineItems() {
      timelineItems.forEach((item) => {
        if (isElementInViewport(item)) {
          item.classList.add("in-view");
        }
      });
    }
  
    window.addEventListener("load", revealTimelineItems);
    window.addEventListener("scroll", revealTimelineItems);
    window.addEventListener("resize", revealTimelineItems);
  });








/* ----  team_membar_06 ----  */


  $(document).ready(function () {
    $("#news-slider").owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 1000,
        dots: true,
        nav: true,
        navText: ['<i class="ri-arrow-left-line"></i>', '<i class="ri-arrow-right-line"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
});



// ---- foooter js ----

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".scroll-reveal");
    const images = document.querySelectorAll(".parter_row img");

    function revealOnScroll() {
        elements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.85) {
                el.classList.add("active");
            }
        });

        images.forEach((img, index) => {
            const rect = img.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.9) {
                setTimeout(() => {
                    img.classList.add("active");
                }, index * 200); // Staggered effect
            }
        });
    }

    // Optimize scroll performance with debounce
    function debounce(func, delay) {
        let timeout;
        return function () {
            clearTimeout(timeout);
            timeout = setTimeout(func, delay);
        };
    }

    window.addEventListener("scroll", debounce(revealOnScroll, 50));
    revealOnScroll(); // Initial check when page loads
});

























/* -- burner-login JS--  */


 // Toggle Password Visibility
 function togglePassword() {
  let passwordField = document.getElementById("password");
  passwordField.type = passwordField.type === "password" ? "text" : "password";
}



// Login Validation
document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();
  let username = document.getElementById("username");
  let password = document.getElementById("password");

  if (!username.value || !password.value) {
      username.classList.add("error");
      password.classList.add("error");
      return;
  }
});

// Show Form with Animation
document.getElementById("loginBox").style.animation = "fadeIn 1s forwards";





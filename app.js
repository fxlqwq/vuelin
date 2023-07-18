new Vue({
    el: '#app',
    methods: {
      scrollToSection(selector) {
        const element = document.querySelector(selector);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      },
      goToLink(link) {
        window.location.href = link;
      }
    }
  });
  
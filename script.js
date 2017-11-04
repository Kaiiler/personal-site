
document.addEventListener("DOMContentLoaded", function(event) { 
    function warn() {
        let btn = document.getElementById('submit-btn');
        btn.addEventListener('click', () => {
            alert('This does not actually work :P');
        })
    }
    warn();
  });

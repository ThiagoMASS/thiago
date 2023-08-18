//DomcontentLoaded  --- para quando  a pagina estiver carregada


document.addEventListener('DOMContentLoaded',()=>{
    const navLinks = document.querySelectorAll(" header button a ");
    for( const link of navLinks){
        link.addEventListener("click", smoothScroll);
    }

})

function smoothScroll(e) {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href"); //variavel targetid evento.target.vamos setar um atributo qque no caso é o href que vai procurar o id que  está no href
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
        const offsetTop = targetSection.offsetTop;
        
        window.scrollTo({
            top: offsetTop,
            behavior: "smooth"
          });
      }
}
;






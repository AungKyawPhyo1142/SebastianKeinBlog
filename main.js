document.getElementById('project-tag').onclick = function(){
    document.getElementById('project-tag').classList.add('active');
    
    document.getElementById('home-tag').classList.remove('active');
    document.getElementById('aboutMe-tag').classList.remove('active');
    document.getElementById('skills-tag').classList.remove('active');
    document.getElementById('contact-tag').classList.remove('active');
}

document.getElementById('home-tag').onclick = function(){
    document.getElementById('home-tag').classList.add('active');
    
    document.getElementById('project-tag').classList.remove('active');
    document.getElementById('aboutMe-tag').classList.remove('active');
    document.getElementById('skills-tag').classList.remove('active');
    document.getElementById('contact-tag').classList.remove('active');
}

document.getElementById('aboutMe-tag').onclick = function(){
    document.getElementById('aboutMe-tag').classList.add('active');
    
    document.getElementById('home-tag').classList.remove('active');
    document.getElementById('project-tag').classList.remove('active');
    document.getElementById('skills-tag').classList.remove('active');
    document.getElementById('contact-tag').classList.remove('active');
}

document.getElementById('skills-tag').onclick = function(){
    document.getElementById('skills-tag').classList.add('active');
    
    document.getElementById('home-tag').classList.remove('active');
    document.getElementById('aboutMe-tag').classList.remove('active');
    document.getElementById('project-tag').classList.remove('active');
    document.getElementById('contact-tag').classList.remove('active');
}

document.getElementById('contact-tag').onclick = function(){
    document.getElementById('contact-tag').classList.add('active');
    
    document.getElementById('home-tag').classList.remove('active');
    document.getElementById('aboutMe-tag').classList.remove('active');
    document.getElementById('project-tag').classList.remove('active');
    document.getElementById('skills-tag').classList.remove('active');
}




function filter() {

  var value,name,profile,i,len;

  value = document.getElementById("value").value.toUpperCase();
  profile = document.getElementsByClassName("profile");
  len = profile.length;
  for(i=0; i<len; i++) {
    name = profile[i].getElementsByClassName("name");
    if (name[0].innerHTML.toUpperCase().indexOf(value) > -1) {
      profile[i].style.display = "flex";
    }else{
      profile[i].style.display = "none";
    }
  }

}

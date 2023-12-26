async function hello()
{ 
   
    var result="";
   const response = await fetch("https://countriesnow.space/api/v0.1/countries");
  
   const JSONresult = await response.json();
   for(var i=0; i<JSONresult.data.length;i++)
   {
        result+=`<option> ${JSONresult.data[i].country} </option>`;
   }
   document.getElementById("ddlCountry").innerHTML= result;
   
}

hello();

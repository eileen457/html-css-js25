function convertMarkdown(){
let markdowninput=document.getElementById("markdown-input").value;

markdowninput=markdowninput.replace(/^\s*###\s+(.+)$/gm, `<h3>$1</h3>`);   //Usas .+ en los Títulos (#) y las Citas (>) porque quieres que atrape absolutamente todo hasta que se acabe la línea ($). No hay peligro de pasarse de largo.
markdowninput=markdowninput.replace(/^\s*##\s+(.+)$/gm, `<h2>$1</h2>`); //^: Obliga a que el # esté al inicio de la línea.
markdowninput=markdowninput.replace(/^\s*#\s+(.+)$/gm, `<h1>$1</h1>`); // \s+: Asegura que haya obligatoriamente un espacio entre los # y el texto del título 
																	//	\s*: Permite que haya espacios opcionales antes del #

markdowninput=markdowninput.replace(/\*\*(.*?)\*\*/g, `<strong>$1</strong>`); // Usas .*? en las Negritas, Cursivas, Enlaces e Imágenes porque puede haber más de uno en la misma línea, y necesitas que se cierren en el primer asterisco, corchete o paréntesis que encuentren.
markdowninput=markdowninput.replace(/__(.*?)__/g, `<strong>$1</strong>`);

markdowninput=markdowninput.replace(/\*(.*?)\*/g, `<em>$1</em>`);
markdowninput=markdowninput.replace(/_(.*?)_/g, `<em>$1</em>`);

markdowninput=markdowninput.replace(/!\[(.*?)\]\((.*?)\)/g, `<img alt="$1" src="$2">`); // variables temporales $1 y $2
markdowninput=markdowninput.replace(/\[(.*?)\]\((.*?)\)/g, `<a href="$2">$1</a>`);

markdowninput=markdowninput.replace(/^\s*>\s+(.+)$/gm,`<blockquote>$1</blockquote>`);   //Hace que busque en todo el documento (g) y línea por línea (m)

return markdowninput;

}

document.getElementById("markdown-input").addEventListener("input",()=>{
let result=convertMarkdown();
document.getElementById("html-output").textContent=result; // método .textContent muestra el texto plano (verías las etiquetas <h1> escritas en la pantalla)

document.getElementById("preview").innerHTML=result;  // Para que la pantalla dibuje el título grande o la negrita como lo vería un usuario, necesitas usar .innerHTML
});


let apiProjectApi = new TempApi.ProjectApi();import TempApi from '../src/index';document.getElementById('ixlwv').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/Page1' ;}};window.onload = () => {apiProjectApi.getAllproject((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("i2sk8").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'projectImage']");
if(insideSubDataElement !== null && data[data.length -i -1].projectImage !== undefined){
  insideSubDataElement.src = data[data.length -i -1].projectImage.data;
  insideSubDataElement.name = data[data.length -i -1].projectImage.name;
}
else if(subDataElements[i].getAttribute('annotationname') === 'projectImage' && data[data.length -i -1].projectImage !== undefined){
  subDataElements[i].src = data[data.length -i -1].projectImage.data;
  subDataElements[i].name = data[data.length -i -1].projectImage.name;
}
 } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'projectTitle']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].projectTitle;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'projectTitle'){
        subDataElements[i].textContent = data[data.length -i -1].projectTitle;
        
      }
     } catch (e) { console.log(e) };
        map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
        
      }
      
    });

    window.localStorage.setItem('data', JSON.stringify(Array.from(map.entries())));
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});};
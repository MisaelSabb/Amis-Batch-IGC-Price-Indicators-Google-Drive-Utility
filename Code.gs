function elaborateIGCData() {
  //shared folder with IGC
  var folder = DriveApp.getFolderById('');
  //the folder where place the elaboration element
  var folderElaboration = DriveApp.getFolderById('');
  //it will contain the file id
  var csvId;
  
  var theFileName='';
  
  var file = DriveApp.getFilesByName(theFileName);
  
  while (file.hasNext()) {    
    
    csvId= file.next().getId()
    
  } 
  DriveApp.getFileById(csvId).makeCopy(folderElaboration);
  DriveApp.getFileById(csvId).setName('oldFile');  
  
  //schedule this function daily
}

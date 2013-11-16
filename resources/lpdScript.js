/*disp_db start*/
  function setStage() {
      document.getElementById('Create_db_form').style.opacity = 0;
      document.getElementById('Update_db_form').style.opacity = 0;
      document.getElementById('Delete_db_form').style.opacity = 0;
      document.getElementById('Sort_db_form').style.opacity = 0;
      document.getElementById('Manual_db_form').style.opacity = 0;

      document.getElementById('Create_db_form').style.zIndex = 0;
      document.getElementById('Update_db_form').style.zIndex = 0;
      document.getElementById('Delete_db_form').style.zIndex = 0;
      document.getElementById('Sort_db_form').style.zIndex = 0;
      document.getElementById('Manual_db_form').style.zIndex = 0;
  }
  
function setPositions()
{
    var r_t_Top = document.getElementById('outputTable').offsetTop;
    var r_t_Left = document.getElementById('outputTable').offsetLeft;
    var r_t_Height = document.getElementById('outputTable').offsetHeight;
    var r_t_Width = document.getElementById('outputTable').offsetWidth;
  
    document.getElementById('db_nav').style.top = r_t_Top + r_t_Height + 10;
    document.getElementById('db_nav').style.left = r_t_Left;
    document.getElementById('db_nav').style.width = r_t_Width;
  
    var n_t_Top = document.getElementById('db_nav').offsetTop;
    var n_t_Height = document.getElementById('db_nav').offsetHeight;
    
    var x = n_t_Top + n_t_Height + 10;
    var y = r_t_Left;
    var z = r_t_Width;
    
    document.getElementById('Update_db_form').style.top = x;
    document.getElementById('Update_db_form').style.left = y;
    document.getElementById('Update_db_form').style.width = z;
    
    document.getElementById('Delete_db_form').style.top = x;
    document.getElementById('Delete_db_form').style.left = y;
    document.getElementById('Delete_db_form').style.width = z;
    
    document.getElementById('Sort_db_form').style.top = x;
    document.getElementById('Sort_db_form').style.left = y;
    document.getElementById('Sort_db_form').style.width = z;
    
    document.getElementById('Create_db_form').style.top = x;
    document.getElementById('Create_db_form').style.left = y;
    document.getElementById('Create_db_form').style.width = z;

    document.getElementById('Manual_db_form').style.top = x;
    document.getElementById('Manual_db_form').style.left = y;
    document.getElementById('Manual_db_form').style.width = z;

}
  
  
function newDisplay(z) {
    z = z + '_db_form';
            
    var x = false;
    x = document.getElementById(z).style.opacity;

    if (x == 1) {
        document.getElementById(z).style.opacity = 0
    }
    else {
        setStage();
        document.getElementById(z).style.opacity = 1
        document.getElementById(z).style.zIndex = 10;
    }

            

}
        
function findZ()
{
         
    var a =   document.getElementById('Create_db_form').style.zIndex;
    var b =   document.getElementById('Update_db_form').style.zIndex;
    var c =    document.getElementById('Delete_db_form').style.zIndex;
    var d =    document.getElementById('Sort_db_form').style.zIndex;
         
    var x = 'Create: ' + a + '<br/>Update: ' + b + '<br/>Delete: ' + c + '<br/>Sort: ' + d;
        
    document.getElementById('zTest').innerHTML = x;
}


/*disp_db close*/
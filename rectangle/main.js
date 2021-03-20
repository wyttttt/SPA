$(()=>{
  let $width=$('#width'),
      $height=$('#height'),
      $btnCal=$("#calc"),
      $form=$('#main'),
      $perimeter=$('#perimeter'),
      $widthValidate=$('#width-validate'),
      $heightValidate=$('#height-validate'),
      $area=$('#area');

  $width.keypress((e)=>{
    let key=e.key,
        val=e.target.value,
        pos=e.target.selectionStart;
/*
  if(/[abcdf-zABCDF-Z`~!@#$%^&*()=_+[\]{}|;:'",<>/?\\]/.test(key))
  e.preventDefault();
  //合法字符的规则
  //合法字符：e
  //在一个科学技术法的数字前中后不能再出现e
  if(val.indexOf('e')!==-1) e.preventDefault();
  //
});
*/
  val = val.slice(0,pos)+key+val.slice(pos,val.length);
  if(/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test(val)) e.preventDefault();
  });
$height.keypress();

$form.focusout((e)=>{
  console.log(e.target);
});

$width.focusout(()=>{
  if(!validate($width,$widthValidate)){
    $width.select();
  }
});
$height.focusout(()=>{
  if(!validate($width,$widthValidate)){
    $height.select();
  }
});
$height.focusout(()=>{
  if(!validate($width,$widthValidate)){

  }
});


  $btnCal.click(()=>{
    let w=Number($width.val()),
        h=Number($height.val());

  //validate
  if(validate($width,$widthValidate) && validate($height,$heightValidate)){
    let p=(w+h)*2,
        a=w*h;

  //output
    $perimeter.val(p);
    $area.val(a); 
  }
  });     
});

function validate(input,output){
  //is empty
  if(input.val()===''){
    output.html('该字段不能为空');
    return false;
  }else{
    output.html('');
  }


  //is number
  let val =Number(input.val());

  if(isNaN(val)){
    output.html('该字段应该是数值');
    return false;
  } else {
    output.html('');
  }

  //is > 0
  if(val < 0){
    output.html('该数值不能小于0');
    return false;
  } else {
    output.html('');
  }

  
  return true;
}

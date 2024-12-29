import {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {useForm} from 'react-hook-form';
import { render } from 'react-dom';

const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
};

function DestForm() {
    const form = useForm();
    const {register,handleSubmit,formState} = form;
    const {errors} = formState;

    const formStyle ={
        width:'70%',
        aspectRatio:'1/1',
        marginLeft:'auto',
        marginRight:'auto',
        
    }
    function imgChoice(e){
        if(e.target.value=='Upload'){
            document.getElementById('link').style.display='none';
            document.getElementById('upload').style.display='block';
        }
        else{
            document.getElementById('link').style.display='block';
            document.getElementById('upload').style.display='none';
            document.getElementById('imgSrc').value='';
        }
    }
    return(
        <div style={containerStyle}>
            <form style={formStyle} onSubmit={handleSubmit((data)=>{
                localStorage.setItem('cards',JSON.stringify([...JSON.parse(localStorage.getItem('cards')),{title:data.title,imgSrc:data.imgSrc,alertTag:'New!'}]));
                if(!localStorage.getItem('destinations')) {localStorage.setItem('destinations',JSON.stringify([]))};
                localStorage.setItem('destinations',JSON.stringify([...JSON.parse(localStorage.getItem('destinations')),{name:data.title,brief:data.brief}]));
                location.href='/TravelList';
            })}>
                <div style={{display:'flex',gap:'1em'}}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" style={{height:'2em',width:'9em',fontSize:'1em'}} className="form-control" id="title" {...register('title',{required:true})}/>
                        {errors.title && <p className="text-danger">Title is required</p>}
                    </div>
                    <div id='imgInput' className="form-group">
                        <label htmlFor="imgSrc">img</label>
                        <div>
                            <div style={{display:'flex',gap:'1em'}}>
                                <div id='link'>
                                    <input type="text" className="form-control" id="imgSrc" {...register('imgSrc',{required:true})}/>
                                    {errors.imgSrc && <p className="text-danger">Image Source is required</p>}
                                </div>
                                <div id='upload' style={{display:'none'}}>
                                    <input type="file" className="form-control" id="imgSrc" {...register('imgSrc',{required:true})}/>
                                    {errors.imgSrc && <p className="text-danger">upload is required</p>}
                                </div>
                                <select onChange={imgChoice}>
                                    <option>Link</option>
                                    <option>Upload</option>
                                </select>
                            </div>

                        </div>

                    </div>
                    <div id='preview' style={{paddingTop:'25px'}}>
                        <button type="button"  onClick={
                            ()=>{
                                let img=document.getElementById('imgSrc').value;
                                if(img!=''){
                                    document.getElementById('imgPreview').innerHTML=`<img src=${img} style="width:15em;height:15em;border-radius:10px"/>`;
                            }
                        }} className="btn btn-primary">Preview</button>
                    </div>
                </div>
                <div id='imgPreview'></div>
                <div className="form-group">
                    <label htmlFor="brief">Brief</label>
                    <input type="text" className="form-control" id="brief" {...register('brief',{required:true})}/>
                    {errors.alertTag && <p className="text-danger">Brief is required</p>}
                </div>
                <button type="submit" className="btn btn-primary">Submit </button>
            </form>
        </div>
    )


}

export default DestForm;
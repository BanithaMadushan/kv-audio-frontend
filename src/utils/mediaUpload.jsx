import { createClient } from "@supabase/supabase-js";

const anon_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indzbm5hdm15cnNxdWJtdmJ4dXlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg1MzI0NzksImV4cCI6MjA4NDEwODQ3OX0.UFpkbcNJ2cjrBp-r_SZNhOY3dCbFruzr5UNBCShZ0Uc"

const superbase_url = "https://wsnnavmyrsqubmvbxuys.supabase.co"

const superbase = createClient(superbase_url, anon_key)

export default function mediaUpload(file){

    return new Promise((resolve, reject)=> {
        if(file == null)
            reject("No file selected");

        const names = file.name.split(".");
        const timestamp = new Date().getTime();
        const fileName = timestamp+file.name;
    
        superbase.storage.from("images").upload(fileName, file, {
            cacheControl: '3600',
            upsert: false
        }).then(()=>{
    
            const publicUrl = superbase.storage.from("images").getPublicUrl(file.name).data.publicUrl;
            resolve(publicUrl);
        }).catch(()=>{
            reject("Error uploading file");
        })
    });

    
}
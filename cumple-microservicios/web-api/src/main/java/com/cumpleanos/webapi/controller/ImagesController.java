package com.cumpleanos.webapi.controller;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@CrossOrigin("*")
public class ImagesController {

    @GetMapping(value = "/images/{imageName}", produces = MediaType.IMAGE_JPEG_VALUE)
    @ResponseBody
    public FileSystemResource getImage(@PathVariable String imageName) {
        String imagePath = "C:/images/" + imageName; // Ruta completa a la imagen
        FileSystemResource resource = new FileSystemResource(imagePath);
        return resource;
    }
}

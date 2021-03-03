import { async } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AddImageService } from '../../services/add-image.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imageUploadForm: FormGroup;
  imageData: string;

  constructor(private fb: FormBuilder,
    private imageService: AddImageService) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {
    this.imageUploadForm = this.fb.group({
      username: [''],
      email: [''],
      image: ['']
    });
  }

  selectFile(event: Event) {
    console.log("file selected");
    const file = (event.target as HTMLInputElement).files[0];
    this.imageUploadForm.patchValue({ image: file });
    const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
    if (file && allowedMimeTypes.includes(file.type)) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageData = reader.result as string;
      }
      reader.readAsDataURL(file);
    }
  }

  saveImageForm() {
    console.log("Form value: ", this.imageUploadForm.value);

    this.imageService.addProduct(this.imageUploadForm.value, this.imageUploadForm.value.image)
      .subscribe(
        (async (data: any) => {
          console.log("Product added: ", data);
          this.imageUploadForm.reset();
          this.imageData = null;
        })
      )
  }
}

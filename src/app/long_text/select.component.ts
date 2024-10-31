import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule,  Validators, ReactiveFormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css'
})
export class SelectComponent {

  content: string = ''; // محتوى النص
  mediaFiles: File[] = []; // قائمة الملفات المدخلة

  // دالة لتحميل الوسائط
  onMediaChange(event: any) {
    const files: FileList = event.target.files;
    this.mediaFiles = Array.from(files);
    this.insertMediaFiles();
  }

  // دالة لإدراج الوسائط داخل المحتوى
  insertMediaFiles() {
    const editor: HTMLElement = document.querySelector('.article_editor_canvas')!;
    this.mediaFiles.forEach(file => {
      const mediaElement = document.createElement('div');
      mediaElement.classList.add('media-item');
      const reader = new FileReader();

      reader.onload = (e: any) => {
        const mediaContent = file.type.startsWith('image/')
          ? `<img src="${e.target.result}" alt="${file.name}" />`
          : `<video controls><source src="${e.target.result}" type="${file.type}">Your browser does not support the video tag.</video>`;
        mediaElement.innerHTML = mediaContent;
        editor.appendChild(mediaElement);
      };

      reader.readAsDataURL(file);
    });
  }

  urls: string[] = []; // مصفوفة لتخزين الروابط

  // دالة لإضافة URL إلى المحتوى
  addUrlToContent() {
    const urlInput = document.getElementById('url') as HTMLInputElement;
    const newUrl = urlInput.value.trim();

    if (newUrl) {
      this.urls.push(newUrl); // حفظ الرابط في المصفوفة
      this.displayUrls(); // عرض الروابط في المحتوى
      urlInput.value = ''; // مسح حقل الإدخال بعد إضافة URL
    }
  }

  displayUrls() {
    const contentDiv = document.querySelector('.article_editor_canvas') as HTMLElement;

    // مسح الروابط القديمة
    const existingUrls = contentDiv.querySelectorAll('a');
    existingUrls.forEach(url => url.remove());

    // إضافة الروابط الجديدة
    this.urls.forEach(url => {
      const urlElement = document.createElement('a');
      urlElement.href = url;
      urlElement.target = '_blank'; // فتح الرابط في نافذة جديدة
      urlElement.innerText = url;
      urlElement.style.color = 'blue'; // تنسيق اللون
      urlElement.style.textDecoration = 'underline'; // إضافة خط تحت الرابط
      contentDiv.appendChild(document.createElement('br')); // إضافة فاصل
      contentDiv.appendChild(urlElement);
    });
  }


  hashtag: string = '';
  hashtags: string[] = []; // مصفوفة لتخزين الهاشتاجات

onHashtagKeyup(event: KeyboardEvent) {
  const inputElement = event.target as HTMLInputElement;
  const value = inputElement.value.trim();

  // تحقق مما إذا كان المستخدم قد أدخل كلمة كاملة
  if (event.key === ' ' || event.key === 'Enter') {
    if (value) {
      this.addHashtagToContent(value);
      inputElement.value = ''; // امسح حقل الإدخال بعد إضافة الهاشتاج
    }
  }
}

addHashtagToContent(hashtag: string) {
  // إضافة الهاشتاج إلى المصفوفة
  this.hashtags.push(`#${hashtag}`);

  // تحديث المحتوى
  const contentDiv = document.querySelector('.article_editor_canvas');

  if (contentDiv) {
    // عرض الهاشتاجات بشكل متسلسل
    contentDiv.innerHTML = this.hashtags.join(' ') + '<br>'; // إضافة سطر جديد بعد الهاشتاجات
  } else {
    console.warn('contentDiv not found');
  }
}


//



}

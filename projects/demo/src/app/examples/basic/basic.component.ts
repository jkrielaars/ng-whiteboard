import { Component } from '@angular/core';
import { FormatType, formatTypes, NgWhiteboardService } from 'ng-whiteboard';

@Component({
  selector: 'app-basic-component',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
  providers: [NgWhiteboardService]
})
export class BasicComponent {
  data = [{x:0,y:0,rotation:0,opacity:100,options:{strokeWidth:5,strokeColor:"#ce222c",lineCap:"round",lineJoin:"round",dasharray:"",dashoffset:0},type:"BRUSH",value:"M 300 138.89C 323.702 183.394 393.987 251.805 482.624 251.805C 489.472 251.805 496.432 251.397 503.486 250.537C 523.535 500.33 372.179 650.995 300 704.89C 227.82 650.995 76.4644 500.33 96.5142 250.537C 103.574 251.397 110.522 251.805 117.376 251.805C 206.004 251.805 276.301 183.391 300 138.89",id:"element_BRUSH_1"},{x:0,y:0,rotation:0,opacity:100,options:{strokeWidth:5,strokeColor:"#ce222c",lineCap:"round",lineJoin:"round",dasharray:"",dashoffset:0},type:"BRUSH",value:"M 300 188.94C 263.209 232.691 200.571 277.993 123.504 280.292C 122.209 325.778 126.873 370.105 137.428 412.414C 148.24 455.751 165.363 497.571 188.322 536.717C 207.137 568.797 229.831 599.082 255.776 626.733C 272.028 644.055 287.327 657.949 300 668.488C 312.673 657.948 327.972 644.055 344.225 626.733C 370.169 599.082 392.863 568.797 411.678 536.717C 434.637 497.571 451.76 455.751 462.571 412.414C 473.128 370.105 477.792 325.778 476.495 280.292C 399.429 277.993 336.793 232.691 300 188.94L 300 188.94z",id:"element_BRUSH_3"},{x:0,y:0,rotation:0,opacity:100,options:{strokeWidth:5,strokeColor:"#ce222c",lineCap:"round",lineJoin:"round",dasharray:"",dashoffset:0},type:"BRUSH",value:"M 203.191 469.9L 396.809 469.9L 396.809 464.222L 203.191 464.222L 203.191 469.9z",id:"element_BRUSH_5"},{x:0,y:0,rotation:0,opacity:100,options:{strokeWidth:5,strokeColor:"#ffffff",lineCap:"round",lineJoin:"round",dasharray:"",dashoffset:0},type:"BRUSH",value:"M 200.648 529.489C 218.925 560.652 240.979 590.08 266.196 616.956C 278.256 629.81 289.764 640.71 300 649.695C 310.237 640.71 321.743 629.81 333.804 616.956C 359.022 590.08 381.075 560.652 399.353 529.489C 408.032 514.689 415.806 499.582 422.702 484.19L 177.298 484.19C 184.194 499.582 191.968 514.689 200.648 529.489z",id:"element_BRUSH_6"},{x:0,y:0,rotation:0,opacity:100,options:{strokeWidth:5,strokeColor:"#1f211d",lineCap:"round",lineJoin:"round",dasharray:"",dashoffset:0},type:"BRUSH",value:"M 310.806 490.59L 302.053 490.59L 302.053 577.752L 310.806 577.752L 310.806 490.59z",id:"element_BRUSH_7"},{x:0,y:0,rotation:0,opacity:100,options:{strokeWidth:5,strokeColor:"#1f211d",lineCap:"round",lineJoin:"round",dasharray:"",dashoffset:0},type:"BRUSH",value:"M 378.145 502.015L 378.145 526.115L 367.56 542.555L 367.56 490.59L 358.81 490.59L 358.81 576.723L 388.918 529.959L 388.918 502.015L 378.145 502.015z",id:"element_BRUSH_8"},{x:0,y:0,rotation:0,opacity:100,options:{strokeWidth:5,strokeColor:"#1f211d",lineCap:"round",lineJoin:"round",dasharray:"",dashoffset:0},type:"BRUSH",value:"M 272.047 575.43L 272.047 555.426L 259.186 555.426L 259.186 490.59L 251.864 490.59L 251.864 567.393L 260.794 567.393L 264.366 575.43L 272.047 575.43z",id:"element_BRUSH_9"},{x:0,y:0,rotation:0,opacity:100,options:{strokeWidth:5,strokeColor:"#1f211d",lineCap:"round",lineJoin:"round",dasharray:"",dashoffset:0},type:"BRUSH",value:"M 289.194 563.225L 279.072 563.225L 279.072 598.353L 266.518 585.731L 266.518 582.277L 262.044 582.277L 262.044 595.971L 285.86 623.835L 290.027 623.835L 290.027 577.752L 297.946 577.752L 297.946 490.59L 289.194 490.59L 289.194 563.225z",id:"element_BRUSH_10"},{x:0,y:0,rotation:0,opacity:100,options:{strokeWidth:5,strokeColor:"#1f211d",lineCap:"round",lineJoin:"round",dasharray:"",dashoffset:0},type:"BRUSH",value:"M 238.2 539.232L 234.781 537.275L 234.781 490.59L 226.565 490.59L 226.565 521.967L 212.188 500.501L 212.188 497.261L 221.171 497.261L 222.055 490.59L 195.841 490.59L 196.283 495.199L 242.083 569.716L 246.415 569.716L 246.415 490.59L 238.2 490.59L 238.2 539.232z",id:"element_BRUSH_11"},{x:0,y:0,rotation:0,opacity:100,options:{strokeWidth:5,strokeColor:"#1f211d",lineCap:"round",lineJoin:"round",dasharray:"",dashoffset:0},type:"BRUSH",value:"M 279.699 534.735L 271.746 534.735L 271.746 542.409L 279.699 542.409L 279.699 534.735z",id:"element_BRUSH_12"},{x:0,y:0,rotation:0,opacity:100,options:{strokeWidth:5,strokeColor:"#1f211d",lineCap:"round",lineJoin:"round",dasharray:"",dashoffset:0},type:"BRUSH",value:"M 315.391 560.606L 327.03 560.606L 327.03 597.281L 310.806 613.505L 310.806 593.113L 302.053 593.113L 302.053 642.024L 336.318 607.76L 336.318 546.079L 322.772 546.079L 322.772 533.338L 336.318 533.338L 336.318 522.264L 315.391 522.264L 315.391 560.606z",id:"element_BRUSH_13"},{x:0,y:0,rotation:0,opacity:100,options:{strokeWidth:5,strokeColor:"#1f211d",lineCap:"round",lineJoin:"round",dasharray:"",dashoffset:0},type:"BRUSH",value:"M 387.325 490.578L 379.796 490.578L 378.782 498.831L 387.325 498.831L 387.325 490.578z",id:"element_BRUSH_14"},{x:0,y:0,rotation:0,opacity:100,options:{strokeWidth:5,strokeColor:"#1f211d",lineCap:"round",lineJoin:"round",dasharray:"",dashoffset:0},type:"BRUSH",value:"M 347.622 569.161L 340.68 577.264L 340.68 602.669L 356.375 584.35L 356.375 522.264L 347.622 522.264L 347.622 569.161z",id:"element_BRUSH_15"},{x:0,y:0,rotation:0,opacity:100,options:{strokeWidth:5,strokeColor:"#1f211d",lineCap:"round",lineJoin:"round",dasharray:"",dashoffset:0},type:"BRUSH",value:"M 404.838 442.721C 404.838 440.105 404.838 437.987 400.103 437.987C 387.358 437.987 378.294 432.665 372.691 428.963C 365.358 424.117 345.796 404.024 320.531 358.716C 324.655 347.876 331.07 328.13 331.07 310.191C 331.07 310.035 331.062 309.877 331.06 309.72L 340.66 308.247L 340.358 315.787L 376.559 298.402L 338.454 294.116L 339.815 299.703L 329.884 301.227C 326.96 289.3 319.121 276.432 312.022 268.14C 303.791 258.527 295.454 250.64 299.159 234.459C 299.159 234.459 295.028 234.459 288.918 244.342L 246.717 312.602C 244.075 313.725 240.48 314.855 241.645 312.215C 241.645 312.215 239.919 312.393 240.455 306.618C 238.15 306.618 236.287 305.309 236.287 305.309L 236.945 302.017C 238.511 301.263 239.857 300.459 240.455 299.712C 237.597 297.449 234.016 290.781 230.571 288.4C 230.234 285.76 231.643 283.518 231.643 283.518L 229.261 279.469C 224.913 279.755 220.438 278.636 215.568 278.636C 208.376 278.636 199.329 283.233 195.463 287.983C 187.388 297.904 187.722 314.378 188.969 333.757C 184.053 337.217 175.792 343.815 175.792 349.1C 175.792 356.032 183.841 356.574 205.045 355.097C 220.746 369.045 227.629 382.151 226.285 411.285C 226.285 411.285 230.423 413.967 237.022 416.485C 237.683 417.272 238.486 418.204 239.421 419.252C 241.836 429.207 231.272 431.02 231.272 436.043C 231.272 442.963 234.358 440.089 235.637 449.933L 255.804 449.933C 253.652 444.586 249.653 441.677 249.653 439.843C 249.653 438.275 251.548 437.003 258.688 436.952C 269.35 444.831 282.729 451.685 297.022 451.685C 307.55 451.685 313.077 445.564 313.077 438C 313.077 428.866 302.759 413.809 297.044 406.168C 303.909 398.497 308.388 389.494 308.388 389.494L 311.78 390.566C 311.78 390.566 321.068 408.785 343.931 423.252C 346.029 430.46 350.719 436.291 350.719 436.291C 351.972 443.785 355.249 448.343 356.575 449.933L 394.301 449.933C 400.504 448.724 404.838 445.953 404.838 442.721zM 251.278 312.87L 291.299 249.82C 291.299 249.82 295.884 254.293 295.884 259.822C 305.175 269.113 311.998 281.948 315.687 296.836C 305.095 304.621 295.533 305.862 282.515 307.65C 273.853 308.841 268.015 315.993 251.433 315.121L 251.278 312.87zM 264.389 374.372C 257.348 368.629 253.932 360.682 252.368 339.184L 294.867 360.348C 292.018 366.501 274.933 374.372 264.389 374.372zM 314.344 356.395C 311.204 357.389 306.46 358.478 300.912 358.395L 259.082 337.564L 256.735 332.868C 269.327 329.857 278.06 329.622 284.571 326.742C 294.832 322.204 301.524 317.813 318.738 319.153C 319.152 331.049 317.775 343.646 314.344 356.395z",id:"element_BRUSH_16"},{x:0,y:0,rotation:0,opacity:100,options:{strokeWidth:2,strokeColor:"#1f211d",lineCap:"round",lineJoin:"round",dasharray:"",dashoffset:0},type:"BRUSH",value:"M 209.792 324.479C 209.794 318.394 208.982 307.155 208.98 300.388L 208.98 300.388C 208.98 299.02 209.014 297.831 209.098 296.87L 209.098 296.87C 209.207 295.885 209.254 295.22 209.67 294.483L 209.67 294.483C 210.745 292.796 212.727 291.223 215.12 289.721L 215.12 289.721C 217.513 288.236 220.309 286.89 222.967 285.956L 222.967 285.956L 223.795 288.315C 221.331 289.179 218.662 290.464 216.439 291.845L 216.439 291.845C 214.234 293.201 212.46 294.722 211.805 295.786L 211.805 295.786C 211.803 295.793 211.796 295.807 211.789 295.83L 211.789 295.83C 211.771 295.883 211.747 295.972 211.722 296.089L 211.722 296.089C 211.672 296.326 211.625 296.67 211.588 297.087L 211.588 297.087C 211.515 297.925 211.481 299.062 211.481 300.388L 211.481 300.388C 211.48 307 212.292 318.229 212.293 324.479L 212.293 324.479L 209.792 324.479L 209.792 324.479z",id:"element_BRUSH_17"},{x:0,y:0,rotation:0,opacity:100,options:{strokeWidth:5,strokeColor:"#ffffff",lineCap:"round",lineJoin:"round",dasharray:"",dashoffset:0},type:"BRUSH",value:"M 243.958 348.379C 242.296 347.284 240.757 346.674 239.399 346.358C 237.317 345.891 236.044 345.944 234.633 345.515C 233.538 345.196 232.143 344.599 230.11 343.186L 227.909 348.587C 229.538 349.625 230.964 350.31 232.27 350.76C 233.868 351.314 235.234 351.489 236.282 351.625C 237.887 351.847 238.661 351.912 240.266 352.815C 241.678 353.628 243.71 355.257 246.668 358.43L 247.14 350.87C 245.991 349.845 244.942 349.026 243.958 348.379z",id:"element_BRUSH_18"},{x:0,y:0,rotation:0,opacity:100,options:{strokeWidth:5,strokeColor:"#ffffff",lineCap:"round",lineJoin:"round",dasharray:"",dashoffset:0},type:"BRUSH",value:"M 277.844 392.471C 277.844 390.209 261.055 378.54 261.055 378.54C 261.055 378.54 258.554 379.85 258.554 383.065C 258.554 383.065 270.819 393.662 276.177 393.662C 277.099 393.662 277.844 393.13 277.844 392.471z",id:"element_BRUSH_19"},{x:0,y:0,rotation:0,opacity:100,options:{strokeWidth:5,strokeColor:"#b1b1b1",lineCap:"round",lineJoin:"round",dasharray:"",dashoffset:0},type:"BRUSH",value:"M 258.303 417.153C 258.293 416.19 259.222 415.619 257.46 415.638C 255.493 415.659 255.561 414.579 254.224 413.296C 251.42 415.644 256.328 417.73 258.303 417.153",id:"element_BRUSH_20"},{x:0,y:0,rotation:0,opacity:100,options:{strokeWidth:5,strokeColor:"#b1b1b1",lineCap:"round",lineJoin:"round",dasharray:"",dashoffset:0},type:"BRUSH",value:"M 247.354 416.296C 248.319 414.842 245.749 412.123 244.133 413.296C 244.673 414.829 245.695 415.88 247.354 416.296z",id:"element_BRUSH_21"},{x:0,y:0,rotation:0,opacity:100,options:{strokeWidth:5,strokeColor:"#b1b1b1",lineCap:"round",lineJoin:"round",dasharray:"",dashoffset:0},type:"BRUSH",value:"M 266.031 414.153C 268.386 414.475 264.786 410.363 264.743 410.296C 260.936 411.8 265.317 412.949 266.031 414.153",id:"element_BRUSH_22"},{x:0,y:0,rotation:0,opacity:100,options:{strokeWidth:5,strokeColor:"#b1b1b1",lineCap:"round",lineJoin:"round",dasharray:"",dashoffset:0},type:"BRUSH",value:"M 273.545 409.867C 275.076 407.543 272.836 404.235 270.11 404.937C 270.552 406.998 272.57 407.818 273.545 409.867z",id:"element_BRUSH_23"},{x:0,y:0,rotation:0,opacity:100,options:{strokeWidth:5,strokeColor:"#b1b1b1",lineCap:"round",lineJoin:"round",dasharray:"",dashoffset:0},type:"BRUSH",value:"M 236.834 410.938C 235.892 409.162 234.547 408.267 234.902 406.008C 236.309 405.635 236.352 407.628 236.904 408.296C 237.142 408.763 237.405 409.215 237.693 409.652C 238.58 409.808 239.93 409.84 240.484 410.724C 242.869 410.724 245.255 410.724 247.64 410.724C 250.213 410.724 251.815 410.076 254.083 409.807C 255.949 409.586 257.629 408.779 259.376 408.152C 260.964 407.581 262.591 407.655 264.022 406.876C 265.84 405.887 266.752 405.82 268.393 404.295C 268.611 402.944 268.661 400.673 270.325 400.222C 271.731 401.135 270.336 401.722 272.901 401.722C 272.509 400.165 271.24 399.044 270.969 397.436C 270.262 397.328 270.389 398.187 269.681 398.079C 268.96 396.768 268.09 395.545 267.115 394.411C 264.861 391.793 262.094 389.689 259.318 387.661C 257.119 386.055 253.386 381.858 250.822 382.65C 247.976 383.53 242.991 383.701 240.652 385.261C 238.991 386.368 238.051 388.415 236.108 389.128C 234.76 389.622 233.97 388.837 232.917 390.078C 231.902 391.273 231.932 392.902 232.169 394.356C 232.467 396.178 232.703 400.694 234.473 401.508C 234.165 402.438 234.619 402.939 235.08 403.65C 235.752 404.689 234.138 405.127 234.044 403.437C 232.823 403.909 232.135 404.183 232.109 402.581C 232.09 401.825 231.688 401.627 230.903 401.983C 229.04 401.724 230.232 404.123 230.488 405.004C 231.288 407.756 232.194 414.764 236.834 410.938",id:"element_BRUSH_24"}];
  color = '#333333';
  backgroundColor = '#eee';
  size = 5;
  isSizeActive = false;
  isSaveActive = false;
  formatType = FormatType;

  constructor(private whiteboardService: NgWhiteboardService) {}

  onSave(img: string) {
    // Copy to clipboard
    const cb = navigator.clipboard;
    if (cb) {
      cb.writeText(img);
    }
  }

  erase() {
    this.whiteboardService.erase();
  }
  setSize(size: number) {
    this.size = size;
    this.isSizeActive = false;
  }
  save(type: formatTypes) {
    this.whiteboardService.save(type);
    this.isSaveActive = false;
  }
  undo() {
    this.whiteboardService.undo();
  }
  redo() {
    this.whiteboardService.redo();
  }
  reset() {
    this.whiteboardService.reset();
  }

  addImage(fileInput: EventTarget | null) {
    if (fileInput) {
      const files = (fileInput as HTMLInputElement).files;
      if (files) {
        const reader = new FileReader();
        reader.onload = (e: ProgressEvent) => {
          const image = (e.target as FileReader).result;
          this.whiteboardService.addImage(image as string);
        };
        reader.readAsDataURL(files[0]);
      }
    }
  }

  setColor(event: Event) {
    const target = event.target as HTMLInputElement;
    this.color = target.value;
  }

  setBackgroundColor(event: Event) {
    const target = event.target as HTMLInputElement;
    this.backgroundColor = target.value;
  }
}

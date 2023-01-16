/*
See on github: https://github.com/muhammederdem/credit-card-form
*/

new Vue({
  el: "#app",
  data() {
    return {
      currentCardBackground: Math.floor(Math.random()* 25 + 1), // just for fun :D
      cardName: "",
      cardNumber: "",
      cardMonth: "",
      cardYear: "",
      cardCvv: "",
      minCardYear: new Date().getFullYear(),
      amexCardMask: "#### ###### #####",
      otherCardMask: "#### #### #### ####",
      cardNumberTemp: "",
      isCardFlipped: false,
      focusElementStyle: null,
      isInputFocused: false
    };
  },
  mounted() {
    this.cardNumberTemp = this.otherCardMask;
    document.getElementById("cardNumber").focus();
  },
  computed: {
    getCardType () {
      let number = this.cardNumber;
      let re = new RegExp("^4");
      if (number.match(re) != null) return "visa";

      re = new RegExp("^(34|37)");
      if (number.match(re) != null) return "amex";

      re = new RegExp("^5[1-5]");
      if (number.match(re) != null) return "mastercard";

      re = new RegExp("^6011");
      if (number.match(re) != null) return "discover";
      
      re = new RegExp('^9792')
      if (number.match(re) != null) return 'troy'

      return "visa"; // default type
    },
		generateCardNumberMask () {
			return this.getCardType === "amex" ? this.amexCardMask : this.otherCardMask;
    },
    minCardMonth () {
      if (this.cardYear === this.minCardYear) return new Date().getMonth() + 1;
      return 1;
    }
  },
  watch: {
    cardYear () {
      if (this.cardMonth < this.minCardMonth) {
        this.cardMonth = "";
      }
    }
  },
  methods: {
    flipCard (status) {
      this.isCardFlipped = status;
    },
    focusInput (e) {
      this.isInputFocused = true;
      let targetRef = e.target.dataset.ref;
      let target = this.$refs[targetRef];
      this.focusElementStyle = {
        width: `${target.offsetWidth}px`,
        height: `${target.offsetHeight}px`,
        transform: `translateX(${target.offsetLeft}px) translateY(${target.offsetTop}px)`
      }
    },
    blurInput() {
      let vm = this;
      setTimeout(() => {
        if (!vm.isInputFocused) {
          vm.focusElementStyle = null;
        }
      }, 300);
      vm.isInputFocused = false;
    }
  }
});

var time = 300; // seconds
	var originalRotate = -90;
	var cntDwn = 59;
	var rotatePerSec = 360 / time;
	var rotateQuarter = time / 4;
	// console.log("rr..."+rotateQuarter);
	function myTimer() {
	    // console.log('time...' + time + 'cntDwn...' + cntDwn + 'originalRotate...' + originalRotate);
	    console.log('time...' + time + 'cntDwn...' + cntDwn + 'originalRotate...' + originalRotate);
	    if (cntDwn == 0) {
	        // console.log("cdn zero");
	        cntDwn = 59;
	    }else{
	        cntDwn--;
	        if (cntDwn < 10) {
	            cntDwn = "0" + cntDwn;
	        }
	        // console.log("cdn --");
	    }

	    if (time >= 240 && time < 300) {
	            // console.log("test1");
	            $("#timer").html("04:"+cntDwn);
        }else if (time >= 180 && time < 240) {
            $("#timer").html("03:"+cntDwn);
        }else if (time >= 120 && time < 180) {
            $("#timer").html("02:"+cntDwn);
        }else if (time >= 60 && time < 120) {
            $("#timer").html("01:"+cntDwn);
        }else if (time >= 0 && time < 60) {
        	if (time > 0) {
        		$("#timer").html("00:"+cntDwn);
        	}else{
        		console.log("time is zero");
        		$("#timer").html("00:00");
        	}            
        }else if(time < 0){
        	
            $(".animate-75-100-b").css("transform","rotate(0deg)");
        }

	    

	    if (originalRotate <= 0) {
	    	originalRotate = originalRotate + 1.2;
	    }else{
	        originalRotate = -88.8;
	    }

	    // console.log("rotate..."+ originalRotate + "....." + time);
        if (time > 225 && time <= 300) {
        	if (originalRotate <= 0) {
        		// console.log("A11 "+time);
        		$(".animate-0-25-b").css("transform","rotate("+originalRotate+"deg)");
        	}else{
        		// console.log("A22 "+time);
        		$(".animate-0-25-b").css("transform","rotate(0deg)");
        		$(".loader-spiner").removeClass("border75").addClass("border50");
        	}            
        }else if (time > 150 && time <= 225 ) {
        	if (originalRotate <= 0) {
        		// console.log("B11 "+time);
        		// $(".animate-0-25-b").css("transform","rotate(0deg)");
        		$(".animate-25-50-b").css("transform","rotate("+originalRotate+"deg)");
        	}else{
        		// console.log("B22 "+time);
        		$(".animate-25-50-b").css("transform","rotate(0deg)");
        		$(".loader-spiner").removeClass("border50").addClass("border25");
        	}
        }else if (time > 75 && time <= 150 ) {
            if (originalRotate <= 0) {
        		// console.log("C11 "+time);
        		// $(".animate-25-50-b").css("transform","rotate(0deg)");
        		$(".animate-50-75-b").css("transform","rotate("+originalRotate+"deg)");
        	}else{
        		// console.log("C22 "+time);
        		$(".animate-50-75-b").css("transform","rotate(0deg)");
        		$(".loader-spiner").removeClass("border25").addClass("border0");
        	}
        }else if (time > 0 && time <= 75 ) {
        	if (originalRotate <= 0) {
        		// console.log("D11 "+time);
        		// $(".animate-50-75-b").css("transform","rotate(0deg)");
        		$(".animate-75-100-b").css("transform","rotate("+originalRotate+"deg)");
        	}else{
        		// console.log("D22 "+time);
        		$(".animate-75-100-b").css("transform","rotate(0deg)");
        	}
            // $(".animate-0-25-b").css("transform","rotate(0deg)");
            // $(".animate-25-50-b").css("transform","rotate(0deg)");
            // $(".animate-50-75-b").css("transform","rotate(0deg)");
            
            
        }else if(time <= 0){
            $(".animate-75-100-b").css("transform","rotate(0deg)");
        }

	    time--;
	    
	}
	var myVar = setInterval(function(){ 
	    myTimer();
	    if (time < 1) {
	        console.log("Stop");
	        clearInterval(myVar);
	        $(".animate-75-100-b").css("transform","rotate(0deg)");
	        $("#timer").html("00:00");
	    }
	}, 1000);
<script>

export default {
    data: () => {
    return {
      steps: {},
      step: 1,
      customer: {
        gender: "1",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        address: "",
        zipCode: "",
        city: "",
        birthDay: "",
        termOfService: "",
        pinCode: "",
        eMail: ""
      },
      hasSeenCongrats: false,
	  tempCustomer: {
        gender: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        address: "",
        zipCode: "",
        city: "",
        birthDay: "",
        termOfService: "",
        pinCode: "",
        eMail: ""
      },
    };
  },
  methods: {
    prev() {
      this.step--;
    },

    next() {
      this.step++;
    },

    customerRegister: function () {
      this.hasSeenCongrats = true;
    }
  }
}
  



</script>

<template>
    <div id="app">
        <section class="pen-description">
            <h1>Sign up form <br>with multiple steps in VueJS</h1>
        </section>
        <section class="register" v-if="!hasSeenCongrats">
            <div class="register-icon">
                <img class="register-icon-item" src="https://vuejs.org/images/logo.png" alt="vue logo">
            </div>

            <h2 class="register-title">Sign up for a new account</h2>

            <div class="register-stepper">
                <div class="step" :class="{'step-active' : step === 1, 'step-done': step > 1}"><span class="step-number">1</span></div>
                <div class="step" :class="{'step-active' : step === 2, 'step-done': step > 2}"><span class="step-number">2</span></div>
                <div class="step" :class="{'step-active' : step === 3, 'step-done': step > 3}"><span class="step-number">3</span></div>
            </div>

            <transition name="slide-fade">
                <section v-show="step === 1">
                    <form class="form" method="post" action="#" @submit.prevent="next">
                        <div class="form-group">
                            <input id="loyaltyCivilityMr" type="radio" value="1" v-model="customer.gender">
                            <label class="input-label" for="loyaltyCivilityMr">Mr.</label>

                            <input id="loyaltyCivilityMrs" type="radio" value="2" v-model="customer.gender">
                            <label class="input-label" for="loyaltyCivilityMrs">Mrs.</label>
                        </div>

                        <div class="form-group">
                            <input type="text" v-model="customer.firstName" autocomplete='customer.firstName' placeholder="First name" required />
                            <input type="text" v-model="customer.lastName" autocomplete='customer.lastName' placeholder="Last name" required />
                        </div>

                        <div class="form-group">
                            <input type="tel" v-model="customer.phoneNumber" autocomplete="customer.phoneNumber" placeholder="Phone number" minlength="9" maxlength="10" pattern="^(?:0|\(?\+33\)?\s?|0033\s?)[1-79](?:[\.\-\s]?\d\d){4}$" required />
                        </div>
                        <div class="cta" data-style="see-through" data-alignment="right" data-text-color="custom">
                            <p class="cta-color">
                                <span class="link_wrap">
                                    <input type="submit" value="Next" class="link_text" />
                                    <span class="arrow-next"></span>
                                </span>
                            </p>
                        </div>
                    </form>
                </section>
            </transition>

            <transition name="slide-fade">
                <section v-show="step === 2">
                    <form class="form" method="post" action="#" @submit.prevent="next">
                        <div class="form-group">
                            <input type="text" v-model="customer.address" autocomplete='customer.address' placeholder="Address" required />
                        </div>
                        <div class="form-group">
                            <input type="text" v-model="customer.zipCode" autocomplete='customer.zipCode' placeholder="Zip Code" minlength="5" maxlength="5" required />
                            <input type="text" v-model="customer.city" autocomplete='customer.city' placeholder="City" required />
                        </div>

                        <div class="form-group cta-step">
                            <div class="cta prev">
                                <p class="cta-color">
                                    <span class="link_wrap">
                                        <a class="link_text" href="#" @click.prevent="prev()"><span class="arrow-prev"></span>Previous
                                        </a>
                                    </span>
                                </p>
                            </div>
                            <div class="cta">
                                <p class="cta-color">
                                    <span class="text"></span>
                                    <span class="link_wrap">
                                        <input type="submit" value="Next" class="link_text" />
                                        <span class="arrow-next"></span>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </form>
                </section>
            </transition>

            <transition name="slide-fade">
                <section v-show="step === 3">
                    <form class="form" action="#" @submit.prevent="customerRegister">
                        <div class="form-group">
                            <input type="email" v-model="customer.eMail" autocomplete="customer.eMail" placeholder="Email" required />
                        </div>
                        <div class="form-group">
                            <input type="date" v-model="customer.birthDay" placeholder="Birthday ('day'/'month'/'year')" required />
                        </div>
                        
                        <div class="form-group cta-step">
                            <div class="cta prev">
                                <p class="cta-color">
                                    <span class="link_wrap">
                                        <a class="link_text" href="#" @click.prevent="prev()"><span class="arrow-prev"></span>Previous
                                        </a>
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div class="register-btn">
                        <input type="submit" value="Créer mon compte" />
                            </div>
                    </form>
                </section>
            </transition>

        </section>
            <section class="congrats register" v-if="hasSeenCongrats">
                        <div class="register-icon">
                <img class="register-icon-item" src="https://vuejs.org/images/logo.png" alt="vue logo">

            </div>
            <h2 class="congrats-title">Thank you !</h2>
            <p class="congrats-subtitle">
                You have successfully created your account and joined the<br/>
                <strong>VueJS<br/>multiple steps form</strong>
            </p>
        </section>
        <section class="pen-description">
            <p style="color: #fff;">by</p>
            <a href="https://www.behance.net/TMMcreation" target="_blank" class="pen-copyright">
                <img height="70" width="70" src="https://mir-s3-cdn-cf.behance.net/user/230/3855631.53be57a2b99fb.jpg" alt="Digital strategist - Web designer">
            </a>
        </section>
    </div>
</template>

<style lang="scss" scoped>
                /* VARIABLES */
/* COLORS */
$brand-primary: #00c4b5;
$brand-secondary: #dedc00;
$brand-lemon: #fff219;
$brand-quaternary: #f282a5;
$brand-menthol: #14877d;
$brand-coral: rgb(250, 90, 85);
$brand-paprika: rgb(205, 0, 125);
$color-white: #fff;
$color-dark: #676767;
$color-gray: #cecece;
$color-lightgray: #ededed;
$color-jungle: #193805;

/* FONT */
$font-montserrat: "Montserrat", sans-serif;
$font-weight-bold: 700;

body {
	background-color: $color-jungle;
	font-family: $font-montserrat;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.pen-description {
	display: flex;
	flex-flow: column;
	align-items: center;
	font-family: $font-montserrat;

	h1 {
		text-align: center;
		margin-top: 2rem;
		color: $color-white;
	}

	p {
		margin: 0;
		line-height: 1;
	}
	
	.pen-copyright {		
		img {
			border-radius: 25px;
			padding: 5px; 
			margin: 5px;
			transition: box-shadow .5s ease-in-out;
		}
		
		&:hover img {
			box-shadow: 0 10px 20px #0e2101;
		}
	}
}

.register {
	display: block;
	color: $color-white;
	max-width: 540px;
	margin: 2rem auto;
	padding: 2rem;
	border-radius: 4rem;
	background: $color-jungle;
	background: linear-gradient(145deg, #173205, #1b3c05);
	box-shadow:  38px 38px 77px #132a04, 
             -38px -38px 77px #1f4606;

	&-icon {
		display: flex;
		background: $color-white;
		border-radius: 2rem;
		width: 50px;
		height: 50px;
		padding: 1rem;
		margin: -50px auto 20px;

		&-item {
			width: 100%;
		}
	}

	&-title {
		font-weight: 300;
		font-size: 1.5rem;
		text-transform: uppercase;
		letter-spacing: 0.2rem;
		text-align: center;
		color: $color-white;
		padding: 0 2rem;
		margin-top: 2rem;
	}

	&-stepper {
		display: flex;
		justify-content: space-between;
		width: 100%;
		position: relative;
		margin: 0 auto 1.5em;

		&::before {
			z-index: 0;
			content: "";
			display: block;
			position: absolute;
			height: 2px;
			top: calc(50% - 1px);
			background: $color-gray;
			width: calc(100% - 20px);
		}

		.step {
			display: flex;
			justify-content: center;
			align-items: center;
			z-index: 2;
			border: 2px solid $color-gray;
			color: $color-gray;
			background-color: $color-white;
			border-radius: 50%;
			min-width: 25px;
			min-height: 25px;
			line-height: 20px;
			font-size: 16px;

			&-active {
				color: $brand-primary;
				background-color: $color-white;
				border-color: $brand-primary;
			}

			&-done {
				color: #a7e4b5;
				border-color: #a7e4b5;
			}

			&-number {
				font-family: $font-montserrat;
				font-weight: 800;
				line-height: 1;
				vertical-align: middle;
			}
		}
	}

	.form {
		&-group {
			display: flex;
			flex-flow: row;
			justify-content: flex-start;
			align-items: baseline;

			label {
				text-align: left;
				font-size: 1.1rem;
				line-height: 1.1;
				padding-bottom: 0.5rem;
			}

			&.cta-step {
				color: $color-white;
				justify-content: space-between;
				
				.cta.prev {
					padding: 10px 30px;
				}
			}

			&.new-password {
				margin-top: 2rem;
			}
		}
		
		.cta-color, 
		.cta-color input,
		.cta-color .link_text {
			color: $color-white;
			font-family: $font-montserrat;
			font-size: 1.1rem;
			text-decoration: none;
		}
		
		.cta-color .link_wrap {
			position: relative;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			
			.arrow-prev {
				position: relative;
				display: inline-block;
				transform: translate(0);
				transition: transform .3s ease-in-out;
				
				&::before {
					content:'<';
					position: absolute;
					top: -17px;
					left: -25px;
				}
			}
			
			.arrow-next {
				position: relative;
				display: inline-block;
				transform: translate(0);
				transition: transform .3s ease-in-out;
				
				&::before {
					content:'>';
					position: absolute;
					top: -10px;
					left: -25px;
				}
			}
			
			&:hover .arrow-prev {
				transform: translate(-5px);
			}
			
			&:hover .arrow-next {
				transform: translate(5px);
			}
		}
	}
	// Override styles for input
	input[type="submit"],
	input[type="text"],
	input[type="tel"],
	input[type="email"],
	input[type="date"] {
		-webkit-appearance: none;
		border: 0;
		border-radius: 5px;
		padding: 1.3rem 1rem;
		width: 100%;
		margin: 0.5rem;
	}

	input[type="submit"] {
		cursor: pointer;
		position: relative;
		padding-right: 36px;
		background: none;
		width: fit-content;

		&:hover,
		&:focus {
			box-shadow: unset;
			transform: none;
		}

		&::after {
			content: "";
			display: block;
			position: absolute;
			right: 0;
			top: 50%;
			border-radius: 50px;
			border: 1px solid $brand-primary;
			height: 25px;
			width: 25px;
			margin-top: -14px;
			pointer-events: none;
			transition: all 0.33s cubic-bezier(0.12, 0.75, 0.4, 1);
		}
	}
	
	&-btn input {
		color: $color-white;
		font-size: 1.2rem;
		font-family: $font-montserrat;
		font-weight: 800;
		line-height: 1;
		width: fit-content;
		background: linear-gradient(145deg, #1b3c05, #173205);
        box-shadow:  20px 20px 60px #142c04, 
             -20px -20px 60px #1f4406;
		
		&:hover {
            background: linear-gradient(145deg, #173205, #1b3c05);
            box-shadow:  20px 20px 60px #142c04, 
             -20px -20px 60px #1f4406;
		}
	}
	
	    // Transition SLIDE FADE
        .slide-fade-enter-active {
            transition: all .3s ease;
        }
        .slide-fade-leave-active {
            display: none;
            transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
        }
        .slide-fade-enter, .slide-fade-leave-to {
            transform: translateX(10px);
            opacity: 0;
        }
}

.congrats {
	background: $color-white;
	color: $brand-primary;
	padding: 4rem;
	text-align: center;

	&-subtitle {
		line-height: 1.3;

		strong {
			font-size: 2rem;
		}
	}
}

</style>
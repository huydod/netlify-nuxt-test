<template>
  <div>
    <!-- Home -->

    <div class="home">
      <div class="background_image" style="background-image:url(images/contact.jpg)"></div>
      <div class="home_container">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="home_content text-center">
                <div class="home_title">Contact</div>
                <div class="booking_form_container">
                  <form action="#" class="booking_form" id="booking_form">
                    <div class="d-flex flex-xl-row flex-column align-items-start justify-content-start">
                      <div
                        class="booking_input_container d-flex flex-row align-items-start justify-content-start flex-wrap">
                        <div><input type="text" class="datepicker booking_input booking_input_a booking_in"
                                    placeholder="Check in" required="required"></div>
                        <div><input type="text" class="datepicker booking_input booking_input_a booking_out"
                                    placeholder="Check out" required="required"></div>
                        <div><input type="number" class="booking_input booking_input_b" placeholder="Children"
                                    required="required"></div>
                        <div><input type="number" class="booking_input booking_input_b" placeholder="Room"
                                    required="required"></div>
                      </div>
                      <div>
                        <button class="booking_button trans_200">Book Now</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact -->

    <div class="contact">
      <div class="container">
        <div class="row">

          <!-- Contact Content -->
          <div class="col-lg-12">
            <div class="contact_content">
              <div class="contact_title"><h2>Get in touch</h2></div>
              <div class="contact_list">
                <ul>
                  <li>1-22-13 Shinkawa, Chuo-ku, Tokyo 104-0033, Japan</li>
                  <li>03-1111-2222</li>
                  <li>support@tripla.jp</li>
                </ul>
              </div>
              <div class="contact_form_container">
                <form action="#" class="contact_form" id="contact_form">
                  <div class="row">
                    <div class="col-md-6 input_container">
                      <input type="text" class="contact_input" placeholder="Your name" required="required">
                    </div>
                    <div class="col-md-6 input_container">
                      <input type="email" class="contact_input" placeholder="Your email address" required="required">
                    </div>
                  </div>
                  <div class="input_container"><input type="text" class="contact_input" placeholder="Subject"></div>
                  <div class="input_container"><textarea class="contact_input contact_textarea" placeholder="Message"
                                                         required="required"></textarea></div>
                  <button class="contact_button">Send</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',

  head: {
    link: [
      { rel: 'stylesheet', href: '/styles/booking.css' },
      { rel: 'stylesheet', href: '/styles/booking_responsive.css' },
    ],
    script: [
      { defer: true, src: '/js/booking.js' }
    ]
  }
}
</script>

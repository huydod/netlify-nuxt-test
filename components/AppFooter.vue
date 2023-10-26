<template>
  <div>
    <!-- Footer -->

    <footer class="footer">
      <div class="footer_content">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="footer_logo_container text-center" style="color: #393939;">
                <img src="/images/tripla-logo.png" alt="tripla" style="height: 80px;">
                <div>since 2015</div>
              </div>
            </div>
          </div>
          <div class="row footer_row">

            <!-- Address -->
            <div class="col-lg-3">
              <div class="footer_title">Our Address</div>
              <div class="footer_list">
                <ul>
                  <li>1-22-13 Shinkawa</li>
                  <li>Chuo-ku, Tokyo 104-0033</li>
                  <li>Japan</li>
                </ul>
              </div>
            </div>

            <!-- Reservations -->
            <div class="col-lg-3">
              <div class="footer_title">Reservations</div>
              <div class="footer_list">
                <ul>
                  <li>Tel: 03-1111-2222</li>
                  <li>support@tripla.jp</li>
                </ul>
              </div>
            </div>

            <!-- Widgets -->
            <div class="col-lg-3">
              <div class="footer_title">Widgets</div>
              <div class="footer_list">
                <ul>
                  <li>FAQs</li>
                </ul>
              </div>
            </div>

            <!-- Newsletter -->
            <div class="col-lg-3">
              <div class="footer_title">Newsletter</div>
              <div class="newsletter_container">
                <form action="#" class="newsletter_form" id="newsletter_form">
                  <input type="email" class="newsletter_input" placeholder="Your email address" required="required">
                  <button class="newsletter_button">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="copyright">
        <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
        Copyright &copy;{{ new Date().getFullYear() }}
        All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a
        href="https://colorlib.com" target="_blank" rel="noreferrer noopener">Colorlib</a>
        <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
      </div>
    </footer>
  </div>
</template>

<template>
  <div>
    <!-- Header -->

    <header class="header">
      <div class="header_content d-flex flex-row align-items-center justify-content-start">
        <a href="/">
          <img src="/images/tripla-logo.png" alt="tripla" style="height: 42px;">
        </a>
        <div class="ml-auto d-flex flex-row align-items-center justify-content-start">
          <nav class="main_nav">
            <ul class="d-flex flex-row align-items-start justify-content-start">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About us</a></li>
              <li><a href="/booking">Rooms</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
          <div class="book_button"><a href="/booking">Book Online</a></div>
          <div class="header_phone d-flex flex-row align-items-center justify-content-center">
            <img src="/images/phone.png" alt="">
            <span>03-1111-2222</span>
          </div>

          <!-- Hamburger Menu -->
          <div class="hamburger"><i class="fa fa-bars" aria-hidden="true"></i></div>
        </div>
      </div>
    </header>

    <!-- Menu -->

    <div class="menu trans_400 d-flex flex-column align-items-end justify-content-start">
      <div class="menu_close"><i class="fa fa-times" aria-hidden="true"></i></div>
      <div class="menu_content">
        <nav class="menu_nav text-right">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About us</a></li>
            <li><a href="#">Rooms</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </div>
      <div class="menu_extra">
        <div class="menu_book text-right"><a href="#">Book online</a></div>
        <div class="menu_phone d-flex flex-row align-items-center justify-content-center">
          <img src="/images/phone-2.png" alt="">
          <span>03-1111-2222</span>
        </div>
      </div>
    </div>
  </div>
</template>

<template>
  <section class="contactus-body">
    <div class="container">
      <section class="contact-info">
        <img src="src/assets/Icons/Phone_Ringing.png" alt="call" />
        <h4 class="section-title">واحد فروش</h4>
        <div class="contact-item">
          <!-- <span class="contact-region">تهران: </span>
          <span class="contact-number"> 021 5686 7263 </span> -->
          <p class="contact-region">تهران:</p>
          <p class="contact-number">021 1234 5678</p>
        </div>
        |
        <div class="contact-item">
          <!-- <span class="contact-region">تهران: </span>
          <span class="contact-number"> 021 5686 7263 </span> -->
          <p class="contact-number">021 1234 5678</p>
        </div>
        <br />
        <div class="contact-item">
          <!-- <span class="contact-region">تهران: </span>
          <span class="contact-number"> 021 5686 7263 </span> -->
          <p class="contact-region">تبریز:</p>
          <p class="contact-number">041 1234 5678</p>
        </div>
        |
        <div class="contact-item">
          <!-- <span class="contact-region">تهران: </span>
          <span class="contact-number"> 021 5686 7263 </span> -->
          <p class="contact-number">041 1234 5678</p>
        </div>
        <br />
        <div class="contact-item">
          <!-- <span class="contact-region">تهران: </span>
          <span class="contact-number"> 021 5686 7263 </span> -->
          <p class="contact-region">پست الکترونیکی:</p>
          <p class="contact-number">localhost@info</p>
        </div>
        |
        <div class="contact-item">
          <!-- <span class="contact-region">تهران: </span>
          <span class="contact-number"> 021 5686 7263 </span> -->
          <p class="contact-number">localhost@local.com</p>
        </div>
        <br />
        <p>فعالیت به صورت (24/6)</p>
      </section>
      <section class="contact-form">
        <form autocomplete="off">
          <div class="input-group columns-2">
            <input type="text" name="firstName" placeholder="نام" />
            <input
              class="p-default"
              type="text"
              name="lastName"
              placeholder="نام خانوادگی"
            />
            <i class="fa-regular fa-user"></i>
          </div>
          <div class="input-group">
            <input type="email" name="email" placeholder="پست الکترونیک" />
            <i class="fa-solid fa-at"></i>
          </div>
          <div class="input-group">
            <input type="tel" name="tel" placeholder="شماره تماس" />
            <i class="fa-solid fa-mobile-screen-button"></i>
          </div>
          <div class="input-group">
            <textarea
              name="message"
              id="message"
              placeholder="پیام شما"
            ></textarea>
          </div>
          <div class="input-group">
            <button type="submit">ارسال</button>
          </div>
        </form>
      </section>
    </div>
  </section>
</template>

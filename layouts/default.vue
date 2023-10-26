<template>
  <div class="super_container">
    <AppHeader />

    <Nuxt />

    <AppFooter />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',

  head: {
    script: [
      {
        src: 'https://s3-ap-northeast-1.amazonaws.com/triplabot-qa/tripla.min.js',
        async: true,
        'data-triplabot-draggable': true,
        'data-triplabot-code': '60afebc3ac8e15c5d0a497b1ec41d611',
        'data-triplabot-base-url': 'https://concierge.staging.tripla.ai/'
      }
    ]
  }
}
</script>

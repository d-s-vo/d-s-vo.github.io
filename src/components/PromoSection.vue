<template>
<div class="section-promo-des (обертка всего блока)">
    <div class="(блок задающий размеры и отступы) section-promo-conteiner">
        <div class="(пока не понятная обертка возможно для свйпов и т.д) glide">
            <div class="(обёртка для слайдов с data атрибутом) glide__track">
                <div class="(обертка которая прокручивает слайды) glide__track" style="width: 8720px; transition: transform 1000ms cubic-bezier(0.165, 0.84, 0.44, 1) 0s; transform: translate3d(-5450px, 0px, 0px);">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>

</script>

<style lang="scss">
*{ box-sizing: border-box;}
.section-promo-des{
    position: relative;
    margin-top: -44px;
}
.section-promo-conteiner {
    width: 1080px;
    margin-left: auto;
    margin-right: auto;
}
.glide{
    position: relative;
    width: 100%;
    box-sizing: border-box;
}
.glide__track {
    overflow: hidden;
}
</style>
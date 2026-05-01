<template>
  <Layout>
    <RouterView v-slot="{ Component }">
      <component :is="Component">
        <template #main-content-after>
          <div class="prose dark:prose-invert mx-auto w-full max-w-4xl mb-4">
            <h2 id="提交记录" class="mt-4!">
              <a href="#提交记录" class="header-anchor" />
              <span>提交记录</span>
            </h2>
            <GitLogChangeLog class="not-prose" />
          </div>
          <div class="prose dark:prose-invert mx-auto w-full max-w-4xl mb-4">
            <h2 id="贡献者" class="mt-4!">
              <a href="#贡献者" class="header-anchor" />
              <span>贡献者</span>
            </h2>
            <GitLogContributor class="not-prose" />
          </div>
        </template>
      </component>
    </RouterView>
  </Layout>
</template>
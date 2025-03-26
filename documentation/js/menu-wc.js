'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">backend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-0d4455101e70d34840573d2998da95ad206e7529c6c0f17e23695b68ce49aed64609a4abcaad95df84f8f4e16982b4dfa3871e752e1935a9864fc0e04dfcea6e"' : 'data-bs-target="#xs-controllers-links-module-AppModule-0d4455101e70d34840573d2998da95ad206e7529c6c0f17e23695b68ce49aed64609a4abcaad95df84f8f4e16982b4dfa3871e752e1935a9864fc0e04dfcea6e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-0d4455101e70d34840573d2998da95ad206e7529c6c0f17e23695b68ce49aed64609a4abcaad95df84f8f4e16982b4dfa3871e752e1935a9864fc0e04dfcea6e"' :
                                            'id="xs-controllers-links-module-AppModule-0d4455101e70d34840573d2998da95ad206e7529c6c0f17e23695b68ce49aed64609a4abcaad95df84f8f4e16982b4dfa3871e752e1935a9864fc0e04dfcea6e"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-0d4455101e70d34840573d2998da95ad206e7529c6c0f17e23695b68ce49aed64609a4abcaad95df84f8f4e16982b4dfa3871e752e1935a9864fc0e04dfcea6e"' : 'data-bs-target="#xs-injectables-links-module-AppModule-0d4455101e70d34840573d2998da95ad206e7529c6c0f17e23695b68ce49aed64609a4abcaad95df84f8f4e16982b4dfa3871e752e1935a9864fc0e04dfcea6e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-0d4455101e70d34840573d2998da95ad206e7529c6c0f17e23695b68ce49aed64609a4abcaad95df84f8f4e16982b4dfa3871e752e1935a9864fc0e04dfcea6e"' :
                                        'id="xs-injectables-links-module-AppModule-0d4455101e70d34840573d2998da95ad206e7529c6c0f17e23695b68ce49aed64609a4abcaad95df84f8f4e16982b4dfa3871e752e1935a9864fc0e04dfcea6e"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PostAllService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostAllService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthorModule.html" data-type="entity-link" >AuthorModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthorModule-52fcfeb81a7366c1cf2bbc7db0429367afda01359efa64873eafe737eaf87345c0c3f62a8e06f33f1702a48e602eed717bfb300e3037fcb6b778a1628b7f3ce7"' : 'data-bs-target="#xs-controllers-links-module-AuthorModule-52fcfeb81a7366c1cf2bbc7db0429367afda01359efa64873eafe737eaf87345c0c3f62a8e06f33f1702a48e602eed717bfb300e3037fcb6b778a1628b7f3ce7"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthorModule-52fcfeb81a7366c1cf2bbc7db0429367afda01359efa64873eafe737eaf87345c0c3f62a8e06f33f1702a48e602eed717bfb300e3037fcb6b778a1628b7f3ce7"' :
                                            'id="xs-controllers-links-module-AuthorModule-52fcfeb81a7366c1cf2bbc7db0429367afda01359efa64873eafe737eaf87345c0c3f62a8e06f33f1702a48e602eed717bfb300e3037fcb6b778a1628b7f3ce7"' }>
                                            <li class="link">
                                                <a href="controllers/AuthorController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthorController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthorModule-52fcfeb81a7366c1cf2bbc7db0429367afda01359efa64873eafe737eaf87345c0c3f62a8e06f33f1702a48e602eed717bfb300e3037fcb6b778a1628b7f3ce7"' : 'data-bs-target="#xs-injectables-links-module-AuthorModule-52fcfeb81a7366c1cf2bbc7db0429367afda01359efa64873eafe737eaf87345c0c3f62a8e06f33f1702a48e602eed717bfb300e3037fcb6b778a1628b7f3ce7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthorModule-52fcfeb81a7366c1cf2bbc7db0429367afda01359efa64873eafe737eaf87345c0c3f62a8e06f33f1702a48e602eed717bfb300e3037fcb6b778a1628b7f3ce7"' :
                                        'id="xs-injectables-links-module-AuthorModule-52fcfeb81a7366c1cf2bbc7db0429367afda01359efa64873eafe737eaf87345c0c3f62a8e06f33f1702a48e602eed717bfb300e3037fcb6b778a1628b7f3ce7"' }>
                                        <li class="link">
                                            <a href="injectables/AuthorService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthorService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostAllModule.html" data-type="entity-link" >PostAllModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostAllModule-52a29eeaec979e8b8a9f52ef74e422672d88d12ac1eadedbab72068a4317f74ec9b7888fd50d6ad2d364bb7bb6ca097e87ad8104b616d9e9fa32927a713fbba3"' : 'data-bs-target="#xs-injectables-links-module-PostAllModule-52a29eeaec979e8b8a9f52ef74e422672d88d12ac1eadedbab72068a4317f74ec9b7888fd50d6ad2d364bb7bb6ca097e87ad8104b616d9e9fa32927a713fbba3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostAllModule-52a29eeaec979e8b8a9f52ef74e422672d88d12ac1eadedbab72068a4317f74ec9b7888fd50d6ad2d364bb7bb6ca097e87ad8104b616d9e9fa32927a713fbba3"' :
                                        'id="xs-injectables-links-module-PostAllModule-52a29eeaec979e8b8a9f52ef74e422672d88d12ac1eadedbab72068a4317f74ec9b7888fd50d6ad2d364bb7bb6ca097e87ad8104b616d9e9fa32927a713fbba3"' }>
                                        <li class="link">
                                            <a href="injectables/PostAllService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostAllService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostModule.html" data-type="entity-link" >PostModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostModule-217021b92df86e5d7f02afc138320cbb770c12964d7628a2d7567871274053cc7e0a4525441be7d228b0d614be1b7d3b1524eac8e166fd782dadc68f8f69acda"' : 'data-bs-target="#xs-controllers-links-module-PostModule-217021b92df86e5d7f02afc138320cbb770c12964d7628a2d7567871274053cc7e0a4525441be7d228b0d614be1b7d3b1524eac8e166fd782dadc68f8f69acda"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostModule-217021b92df86e5d7f02afc138320cbb770c12964d7628a2d7567871274053cc7e0a4525441be7d228b0d614be1b7d3b1524eac8e166fd782dadc68f8f69acda"' :
                                            'id="xs-controllers-links-module-PostModule-217021b92df86e5d7f02afc138320cbb770c12964d7628a2d7567871274053cc7e0a4525441be7d228b0d614be1b7d3b1524eac8e166fd782dadc68f8f69acda"' }>
                                            <li class="link">
                                                <a href="controllers/PostController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostModule-217021b92df86e5d7f02afc138320cbb770c12964d7628a2d7567871274053cc7e0a4525441be7d228b0d614be1b7d3b1524eac8e166fd782dadc68f8f69acda"' : 'data-bs-target="#xs-injectables-links-module-PostModule-217021b92df86e5d7f02afc138320cbb770c12964d7628a2d7567871274053cc7e0a4525441be7d228b0d614be1b7d3b1524eac8e166fd782dadc68f8f69acda"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostModule-217021b92df86e5d7f02afc138320cbb770c12964d7628a2d7567871274053cc7e0a4525441be7d228b0d614be1b7d3b1524eac8e166fd782dadc68f8f69acda"' :
                                        'id="xs-injectables-links-module-PostModule-217021b92df86e5d7f02afc138320cbb770c12964d7628a2d7567871274053cc7e0a4525441be7d228b0d614be1b7d3b1524eac8e166fd782dadc68f8f69acda"' }>
                                        <li class="link">
                                            <a href="injectables/PostService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/allPosts.html" data-type="entity-link" >allPosts</a>
                            </li>
                            <li class="link">
                                <a href="classes/Author.html" data-type="entity-link" >Author</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateAuthorDto.html" data-type="entity-link" >CreateAuthorDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Post.html" data-type="entity-link" >Post</a>
                            </li>
                            <li class="link">
                                <a href="classes/postAuthorDto.html" data-type="entity-link" >postAuthorDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateAuthorDto.html" data-type="entity-link" >UpdateAuthorDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePostDto.html" data-type="entity-link" >UpdatePostDto</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
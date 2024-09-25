var sidebarData = {
    header : {
        logo : 'images/logo.svg',
        title: '蜜蜂工具'
    },
    section: {
        'Hash' : {
            'CRC' : {
                'CRC-16': 'crc16.html',
                'CRC-16 File': 'crc16_checksum.html',
                'CRC-32': 'crc32.html',
                'CRC-32 File': 'crc32_checksum.html',
            },
            'MD' : {
                'MD2': 'md2.html',
                'MD2 File': 'md2_file_hash.html',
                'MD4': 'md4.html',
                'MD4 File': 'md4_file_hash.html',
                'MD5': 'md5.html',
                'MD5 File': 'md5_checksum.html',
            },
            'SHA1' : {
                'SHA1': 'sha1.html',
                'SHA1 File': 'sha1_checksum.html',
            },
            'SHA2' : {
                'SHA224': 'sha224.html',
                'SHA224 File': 'sha224_checksum.html',
                'SHA256': 'sha256.html',
                'SHA256 File': 'sha256_checksum.html',
                'Double SHA256': 'double_sha256.html',
            },
            'SHA2-512' : {
                'SHA384': 'sha384.html',
                'SHA384 File': 'sha384_file_hash.html',
                'SHA512': 'sha512.html',
                'SHA512 File': 'sha512_file_hash.html',
                'SHA512/224': 'sha512_224.html',
                'SHA512/224 File': 'sha512_224_file_hash.html',
                'SHA512/256': 'sha512_256.html',
                'SHA512/256 File': 'sha512_256_file_hash.html',
            },
            'SHA3' : {
                'SHA3-224': 'sha3_224.html',
                'SHA3-224 File': 'sha3_224_checksum.html',
                'SHA3-256': 'sha3_256.html',
                'SHA3-256 File': 'sha3_256_checksum.html',
                'SHA3-384': 'sha3_384.html',
                'SHA3-384 File': 'sha3_384_checksum.html',
                'SHA3-512': 'sha3_512.html',
                'HA3-512 File': 'sha3_512_checksum.html',
            },
            'Keccak' : {
                'Keccak-224': 'keccak_224.html',
                'Keccak-224 File': 'keccak_224_checksum.html',
                'Keccak-256': 'keccak_256.html',
                'Keccak-256 File': 'keccak_256_checksum.html',
                'Keccak-384': 'keccak_384.html',
                'Keccak-384 File': 'keccak_384_checksum.html',
                'Keccak-512': 'keccak_512.html',
                'Keccak-512 File': 'keccak_512_checksum.html',
            },
            'SHAKE' : {
                'SHAKE128': 'shake128/',
                'SHAKE128 File': 'shake128/file/',
                'SHAKE256': 'shake256/',
                'SHAKE256 File': 'shake256/file/',
            },
            'cSHAKE' : {
                'cSHAKE128': 'cshake128/',
                'cSHAKE128 File': 'cshake128/file/',
                'cSHAKE256': 'cshake256/',
                'cSHAKE256 File': 'cshake256/file/',
            },
            'KMAC' : {
                'KMAC128': 'kmac128/',
                'KMAC128 File': 'kmac128/file/',
                'KMAC256': 'kmac256/',
                'KMAC256 File': 'kmac256/file/',
            },
            'RIPEMD' : {
                'RIPEMD-128': 'ripemd-128/',
                'RIPEMD-128 File': 'ripemd-128/file/',
                'RIPEMD-160': 'ripemd-160/',
                'RIPEMD-160 File': 'ripemd-160/file/',
                'RIPEMD-256': 'ripemd-256/',
                'RIPEMD-256 File': 'ripemd-256/file/',
                'RIPEMD-320': 'ripemd-320/',
                'RIPEMD-320 File': 'ripemd-320/file/',
            },
            'BLAKE' : {
                'BLAKE2b': 'blake2b/',
                'BLAKE2b File': 'blake2b/file/',
                'BLAKE2s': 'blake2s/',
                'BLAKE2s File': 'blake2s/file/',
                'BLAKE3': 'blake3/',
                'BLAKE3 File': 'blake3/file/',
            },
        },
        'Cryptography' : {
            'AES': {
                'Encryption': 'aes/encrypt/',
                'Decryption': 'aes/decrypt/',
            },
            'DES': {
                'Encryption': 'des/encrypt/',
                'Decryption': 'des/decrypt/',
            },
            'Triple DES': {
                'Encryption': 'triple-des/encrypt/',
                'Decryption': 'triple-des/decrypt/',
            },
            'RC4': {
                'Encryption': 'rc4/encrypt/',
                'Decryption': 'rc4/decrypt/',
            },
            'ECDSA': {
                'Key Generator': 'ecdsa/key-generator/',
                'Sign Message': 'ecdsa/sign/',
                'Verify Signature': 'ecdsa/verify/',
            },
            'RSA': {
                'Key Generator': 'rsa/key-generator/',
                'Sign Message': 'rsa/sign/',
                'Verify Signature': 'rsa/verify/',
                'Encryption': 'rsa/encrypt/',
                'Decryption': 'rsa/decrypt/',
            },
        },
        'Encoding' : {
            'Hex (Base16)': {
                'Encode': 'hex_encode.html',
                'Decode': 'hex_decode.html',
                'File to Hex': 'hex_encode_file.html',
                'Hex to File': 'hex_decode_file.html',
            },
            'Base32': {
                'Encode': 'base32_encode.html',
                'Decode': 'base32_decode.html',
                'File to Base32': 'base32_encode_file.html',
                'Base32 to File': 'base32_decode_file.html',
            },
            'Base58': {
                'Encode': 'base58/encode/',
                'Decode': 'base58/decode/',
                'File to Base58': 'base58/encode/file/',
                'Base58 to File': 'base58/decode/file/',
            },
            'Base64': {
                'Encode': 'base64_encode.html',
                'Decode': 'base64_decode.html',
                'File to Base64': 'base64_encode_file.html',
                'Base64 to File': 'base64_decode_file.html',
            },
            'HTML': {
                'Encode': 'html_encode.html',
                'Decode': 'html_decode.html',
            },
            'URL': {
                'Encode': 'url_encode.html',
                'Decode': 'url_decode.html',
            },
        },
        'Format' : {
            'JSON': {
                'Validator': 'json/validator/',
                'Minifier': 'json/minifier/',
                'Formatter': 'json/formatter/',
                'Viewer': 'json/viewer/',
            },
            'XML': {
                'Validator': 'xml/validator/',
                'Minifier': 'xml/minifier/',
                'Formatter': 'xml/formatter/',
            },
        },
        'Convert' : {
            'Case': {
                'lower case': 'case/lower/',
                'UPPER CASE': 'case/upper/',
                'lowerCamelCase': 'case/lower-camel/',
                'UpperCamelCase': 'case/upper-camel/',
                'snake_case': 'case/snake/',
                'kebab-case': 'case/kebab/',
                'CONSTANT_CASE': 'case/constant/',
            },
        },
        'Others' : {
            'Others': {
                'QR Code Generator': 'qr-code/generator/',
                'Syntax Highlight': 'syntax-highlight/',
            },
        },
        'Links' : {
            'link': {
                'Contact': 'https://github.com/emn178/online-tools/issues',
                'tools.bee.la': 'https://tools.bee.la',
                'bee.la': 'https://bee.la',
            },
        },
    }
};



function loadIndex() {
    var html = '';
    for (var section in sidebarData.section) {
        if(sidebarData.section[section]['link']) {
            continue;
        }
        html += '<div class="section">';
        html += '<h2>'+section+'</h2>';
        html += '<div class="blocks">';
        for (var detail in sidebarData.section[section]) {
            html += '<div class="block">';
            html += '<h3>' + detail + '</h3>';
            html += '<nav>';
            html += '<ol>';
            for (var item in sidebarData.section[section][detail]) {
                var url = sidebarData.section[section][detail][item];
                html += '<li><a href="' + url + '">' + item + '</a></li>';
            }
            html += '</ol>';
            html += '</nav>';
            html += '</div>';
        }
        html += '</div>';
        html += '</div>';
    }
    document.getElementById('index').innerHTML = html;
}

function loadSidebar(summary = '',nav = '') {
    var html = '';
    html = '<div class="mask"></div>';
    html += '<div class="container">';
    html += '<header>';
    html += '<a href="./"><img src="'+ sidebarData.header.logo +'" width="18" height="18" alt="Logo" title="'+ sidebarData.header.title +'">';
    html += '<h2>'+ sidebarData.header.title +'</h2></a>';
    html += '<div class="toolbar">';
    html += '<button class="icon theme">';
    html += '<img class="light" src="images/light.svg" alt="Dark mode" title="Dark mode">';
    html += '<img class="dark" src="images/dark.svg" alt="Dark mode" title="Dark mode">';
    html += '</button>';
    html += '</div>';
    html += '</header>';

    html += '<section>';
    for (var section in sidebarData.section) {
        html += '<div class="section">';
        html += '<h3>'+section+'</h3>';
        if(sidebarData.section[section]['link']) {
            html += '<nav class="links">';
            html += '<ol>';
            for (var item in sidebarData.section[section]['link']) {
                var url = sidebarData.section[section]['link'][item];
                html += '<li><a href="'+url+'" target="_blank">'+item+'</a></li>';
            }
            html += '</ol>';
            html += '</nav>';
        }
        else {
            for (var detail in sidebarData.section[section]) {
                if (detail == summary) {
                    html += '<details class="active" open>';
                } else {
                    html += '<details>';
                }
                html += '<summary>' + detail + '</summary>';
                html += '<nav>';
                html += '<ol>';
                for (var item in sidebarData.section[section][detail]) {
                    var url = sidebarData.section[section][detail][item];
                    if (nav == item) {
                        html += '<li  class="active">';
                    } else {
                        html += '<li>';
                    }
                    html += '<a href="' + url + '">' + item + '</a></li>';
                }
                html += '</ol>';
                html += '</nav>';
                html += '</details>';
            }
        }
        html += '</div>';
    }
    html += '</section>';
    html += '</div>';
    document.getElementById('sidebar').innerHTML = html;
}

function getSummaryNav(path) {
    for (var section in sidebarData.section) {
        for (var detail in sidebarData.section[section]) {
            for (var item in sidebarData.section[section][detail]) {
                if (sidebarData.section[section][detail][item] == path) {
                    return {
                        summary: detail,
                        nav: item
                    }
                }
            }
        }
    }
    return {
        summary: '',
        nav: ''
    };
}

const url = new URL(window.location.href);
const path = url.pathname.substring(1);
var autoNav = getSummaryNav(path);
//加载侧边栏
loadSidebar(autoNav.summary,autoNav.nav);
//加载首页
if(path == '' || path == 'index.html') {
    loadIndex();
}
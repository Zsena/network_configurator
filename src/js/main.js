import Alpine from "alpinejs";

window.Alpine = Alpine;

document.addEventListener("alpine:init", () => {
  Alpine.data("dropdown", () => ({
    open: false,
    toggle() {
      if (this.open) {
        return this.close();
      }
      this.$refs.button.focus();

      this.open = true;
    },
    close(focusAfter) {
      if (!this.open) return;

      this.open = false;

      focusAfter && focusAfter.focus();
    },
  }));
});

document.addEventListener("alpine:init", () => {
  Alpine.data("app", () => ({
    dhcp_off: false,
    eth_ip: "192.168.0.10",
    eth_netmask: "255.255.255.0",
    eth_gw: "192.168.0.1",
    eth_dns1: "8.8.8.8",
    eth_dns2: "0.0.0.0",
    wifi_on: false,
    wifi_pass: "wifi PSK key",
    wifi_sec: false,
    wifi_ssid: "wifi network",
    wifi_ssid_scan_enabled: false,
    gsm_on: false,
    gsm_apn: "please provide carrier apn",
    gsm_pin: "sim pin code, empty if none",
    proxy_on: false,
    proxy_host: "",
    proxy_user: "",
    proxy_password: "",
    proxy_auth: "basic",
    proxy_type: "http",
    gsm_wrapper: true,
    proxy_wrapper: true,
    wifi_ssid_scan_enabled_wrapper: false,
    all_config: false,
    device_type: "Device Type",
    device_android: "Device Type: Android",
    device_isr: "Device Type: MPX/ISR",

    init() {
      this.render_config();
      this.render_config_br();
    },

    handleIsr(e) {
      this.gsm_wrapper = false;
      this.device_type = this.device_isr;
      this.all_config = true;
      this.wifi_ssid_scan_enabled_wrapper = false;
    },

    handleAndroid(e) {
      this.gsm_wrapper = false;
      this.proxy_wrapper = false;
      this.device_type = this.device_android;
      this.gsm_on = false;
      this.proxy_on = false;
      this.wifi_ssid_scan_enabled_wrapper = true;
      this.all_config = true;
    },

    render_config_br() {
      return this.render_config("<br/>");
    },

    render_config(lineseparator) {
      let mark = '"';
      let tmp = "";
      tmp += "eth_dhcp=";
      if (this.device_type === this.device_android) {
        mark = "";
        tmp += this.dhcp_off ? "0" : "1";
        if (!this.wifi_ssid_scan_enabled) {
          tmp += lineseparator + "wifi_ssid_scan_enabled=" + mark + "0";
        } else {
          tmp += lineseparator + "wifi_ssid_scan_enabled=" + mark + "1";
        }
      } else {
        mark = '"';
        tmp += this.dhcp_off ? "false" : "true";
      }
      tmp += lineseparator;
      if (this.dhcp_off) {
        tmp += "eth_ip=" + mark + this.eth_ip + mark + lineseparator;
        tmp += "eth_netmask=" + mark + this.eth_netmask + mark + lineseparator;
        tmp += "eth_gw=" + mark + this.eth_gw + mark + lineseparator;
        tmp += "eth_dns1=" + mark + this.eth_dns1 + mark + lineseparator;
        tmp += "eth_dns2=" + mark + this.eth_dns2 + mark + lineseparator;
      }
      if (this.device_type === this.device_android) {
        tmp += "wifi_enabled=";
        tmp += this.wifi_on ? "1" : "0";
        tmp += lineseparator;
      } else {
        tmp += "wifi_enabled=";
        tmp += this.wifi_on ? "true" : "false";
        tmp += lineseparator;
      }
      if (this.device_type === this.device_android) {
        tmp += "wifi_ssid=" + mark + this.wifi_ssid + mark + lineseparator;
        tmp += "wifi_mode=" + mark + "sta" + mark + lineseparator;
        tmp += "wifi_security=";
        tmp += this.wifi_sec ? "1" : "0";

        tmp += lineseparator;
      } else {
        if (this.wifi_on) {
          tmp += "wifi_ssid=" + mark + this.wifi_ssid + mark + lineseparator;
          tmp += "wifi_mode=" + mark + "sta" + mark + lineseparator;
          tmp += "wifi_security=";
          tmp += this.wifi_sec ? "true" : "false";

          tmp += lineseparator;
          if (this.wifi_sec) {
            tmp += "wifi_pass=" + mark + this.wifi_pass + mark + lineseparator;
          }
        } else tmp += "wifi_ssid=" + mark + mark + lineseparator;
      }

      if (this.gsm_on) {
        tmp += 'gsm_apn="' + this.gsm_apn + '"' + lineseparator;
        tmp += 'gsm_pin="' + this.gsm_pin + '"' + lineseparator;
      }
      if (this.proxy_on) {
        tmp += 'proxy_host="' + this.proxy_host + '"' + lineseparator;
        tmp += 'proxy_user="' + this.proxy_user + '"' + lineseparator;
        tmp += 'proxy_password="' + this.proxy_password + '"' + lineseparator;
        tmp += 'proxy_type="' + this.proxy_type + '"' + lineseparator;
        tmp += 'proxy_auth="' + this.proxy_auth + '"' + lineseparator;
      }

      return tmp;
    },
    download_data() {
      let a = window.document.createElement("a");
      a.href = window.URL.createObjectURL(
        new Blob([this.render_config("\n")], {
          type: "application/octet-stream",
        })
      );
      a.download = "update_config.cfg";

      // Append anchor to body.
      document.body.appendChild(a);
      a.click();

      // Remove anchor from body
      document.body.removeChild(a);
    },
  }));
});

Alpine.start();

// const mobile_icon = document.getElementById("mobileIcon");
// const mobile_menu = document.getElementById("mobileMenu");

// function openCloseMenu() {
//   mobile_menu.classList.toggle("block");
//   mobile_menu.classList.toggle("active");
// }

// mobile_icon.addEventListener("click", openCloseMenu);

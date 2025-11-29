---
title: 如何刷入手机GSI固件
date: 2025-07-29
updated: 2025-07-29
categories: 刷机
tags:
  - 刷机

---

## 一、什么是GSI？

通用系统映像（Generic System Image）是谷歌为支持Project Treble的设备提供的标准化系统映像，可以在不同厂商的设备上运行，让用户无需等待厂商更新就能体验新版Android系统。

## 二、准备工作

在开始前，请确保：

1. 您的手机支持Project Treble（大多数2018年后发布的Android手机都支持）
2. 已解锁bootloader
3. 已安装ADB和Fastboot工具
4. ### 备份重要资料！！！

## 三、通过GitHub GSI列表寻找合适固件

### 步骤1：访问GSI列表

[GSI列表](https://github.com/Notproginfinix/phhusson-treble_experimentations/blob/master/Generic-System-Image-(GSI)-list.md)

这个页面整理了各种可用的GSI固件，包括LineageOS、Pixel Experience、AOSP等。

### 步骤2：确定手机架构

在下载GSI前，您需要知道手机的架构：

1. 查看处理器架构（通常是arm64或x86）
2. 确认AB分区类型（A-only或A/B）

### 步骤3：选择合适的GSI

在GitHub列表中：

1. 根据您的Android版本需求选择（如Android 12、13等）
2. 根据架构选择对应版本（如arm64）
3. 注意区分A-only和A/B分区版本
4. 查看各GSI的特性说明，选择符合您需求的

### 步骤4：下载GSI

1. 点击选择的GSI链接
2. 通常会被重定向到相应的开发页面或下载站点
3. 下载.img或.xz格式的镜像文件

## 四、刷入GSI步骤

1. **进入Fastboot模式**：
   
   ```
   adb reboot bootloader
   ```
   
   补充：近几年发布的手机可能需要进入到fastbootd模式，在fastboot界面输入fastboot reboot fastboot

2. **刷入GSI**：
   
   ```
   fastboot flash system [下载的GSI镜像].img
   ```

3. **重启设备到rec之后格式化data**：

## 五、常见问题解决

1. **刷入后无法启动**：
   
   - 尝试刷入对应版本的vendor镜像
   - 检查是否下载了正确架构的GSI

2. **功能缺失**：
   
   - 可能需要刷入额外的补丁或修改
   - 检查XDA论坛上您设备的具体讨论

3. **恢复原厂系统**：
   
   - 下载官方固件包并使用刷机工具恢复

## 六、注意事项

1. 刷机有风险，可能导致设备无法使用
2. 某些功能（如相机、指纹）可能无法正常工作
3. 银行类应用可能无法在已解锁的设备上运行
4. 保修可能会失效

## 七、其他资源

1. [XDA开发者论坛](https://forum.xda-developers.com/)
2. [phhusson的GSI项目](https://github.com/phhusson/treble_experimentations)
3. [LineageOS GSI](https://github.com/AndyCGYan/lineage_build_unified)

通过以上步骤，您应该能够成功找到并刷入适合您手机的GSI固件。如有疑问，建议在相关论坛寻求帮助。

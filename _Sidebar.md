## ![Maven](https://i.imgur.com/2TZzobp.png?1) Maven 
Add the dependency of the latest version to your `pom.xml`:
```xml
<dependency>
    <groupId>com.password4j</groupId>
    <artifactId>password4j</artifactId>
    <version>1.3.0</version>
</dependency>
```

## ![Gradle](https://i.imgur.com/qtc6bXq.png?1) Gradle
Add to your `build.gradle` module dependencies:
```groovy
repositories {
    mavenCentral()
}

dependencies {
    implementation 'com.password4j:password4j:1.3.0'
}
```

## ![Scala SBT](https://i.imgur.com/Nqv3mVd.png?1) Scala SBT 
Add to the managed dependencies of your `build.sbt` the latest version:
```shell script
libraryDependencies += "com.password4j" % "password4j" % "1.3.0"
```

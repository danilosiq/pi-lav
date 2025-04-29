interface SkeletonProps {
    width: number | "full";
    height: number | "full";
    shape: "circle" | "rectangle";
  }
  
  export function Skeleton({ width, height, shape }: SkeletonProps) {
    const styles = {
      width: width === "full" ? "100%" : `${width}px`,
      height: height === "full" ? "100%" : `${height}px`,
    };
  
    return (
      <div
        className={`bg-secondary animate-pulse ${shape === "circle" ? "rounded-full" : "rounded-md"}`}
        style={styles}
      />
    );
  }
  